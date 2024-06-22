# File: video_processing_module.py

import cv2
import os
import subprocess
from PIL import Image
import imagehash
import shutil

def segment_video(video_path, segment_duration, output_folder):
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error opening video file.")
        return []

    # Get video properties
    frame_rate = int(cap.get(cv2.CAP_PROP_FPS))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    # Calculate number of frames per segment
    frames_per_segment = frame_rate * segment_duration

    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    segment_index = 0
    frame_index = 0
    out = None
    segment_paths = []

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # If it's the start of a new segment, create a new video writer
        if frame_index % frames_per_segment == 0:
            if out is not None:
                out.release()
            segment_index += 1

            output_path = os.path.join(output_folder, f"segment_{segment_index}.mp4")
            out = cv2.VideoWriter(output_path, 
                                  cv2.VideoWriter_fourcc(*'mp4v'), 
                                  frame_rate, 
                                  (frame_width, frame_height))
            print(f"Starting segment {segment_index} at frame {frame_index}")
            segment_paths.append(output_path)

        out.write(frame)
        frame_index += 1

    # Release the last video writer
    if out is not None:
        out.release()

    cap.release()
    print("Video segmentation completed.")
    
    return segment_paths

def find_duplicate_images(root_folder):
    image_hashes = {}
    duplicates = []

    for root, _, files in os.walk(root_folder):
        for file in files:
            if file.lower().endswith(('jpeg', 'png', 'jpg', 'bmp')):
                file_path = os.path.join(root, file)
                
                try:
                    with Image.open(file_path) as img:
                        hash_value = imagehash.average_hash(img)
                except (OSError, IOError, ValueError) as e:
                    print(f"Skipping {file_path}: {e}")
                    continue
                
                if hash_value in image_hashes:
                    for original_file in image_hashes[hash_value]:
                        if are_images_similar(file_path, original_file):
                            duplicates.append((file_path, original_file))
                            break  # No need to check further once a duplicate is found
                    image_hashes[hash_value].append(file_path)
                else:
                    image_hashes[hash_value] = [file_path]
    
    return duplicates

def are_images_similar(file1, file2):
    try:
        with Image.open(file1) as img1, Image.open(file2) as img2:
            hash1 = imagehash.average_hash(img1)
            hash2 = imagehash.average_hash(img2)
            return hash1 == hash2
    except (OSError, IOError, ValueError):
        return False

def remove_folder(folder_path):
    try:
        shutil.rmtree(folder_path)
        print(f"Removed folder {folder_path} and its contents")
    except OSError as e:
        print(f"Error removing folder {folder_path}: {e}")

if __name__ == "__main__":
    # Specify the path, segment duration (in seconds), and output folder
    video_path = 'movie2.mp4'  # Replace with your video file path
    segment_duration = 5  # Duration of each segment in seconds
    output_folder = 'output_segments'  # Folder to store the segmented videos

    # Call the function with specified inputs
    segmented_paths = segment_video(video_path, segment_duration, output_folder)

    # Loop through segmented video paths and run YOLOv5 detection
    for segment_path in segmented_paths:
        command = f"python detect.py --weights yolov5s.pt --source {segment_path} --view-img --save-crop --vid-stride 10 --conf-thres 0.5 --save-conf"
        subprocess.run(command, shell=True)
        print(f"Processed {segment_path} with YOLOv5 detection")

    # Find duplicate images in the 'runs/detect/exp/crops' directory
    root_folder = 'runs/detect/exp/crops'  # Root folder containing all subfolders
    duplicates = find_duplicate_images(root_folder)

    if duplicates:
        print("Duplicate images found:")
        for dup in duplicates:
            print(f"{dup[0]} is a duplicate of {dup[1]}")
    else:
        print("No duplicate images found.")

    # Remove 'person' folder in all directories matching 'runs/detect/exp*'
    base_folder = 'runs/detect'  # Base folder containing all 'exp*' subfolders
    for folder in os.listdir(base_folder):
        if folder.startswith('exp'):
            person_folder = os.path.join(base_folder, folder, 'crops', 'person')
            if os.path.exists(person_folder):
                remove_folder(person_folder)
            else:
                print(f"The folder {person_folder} does not exist.")
