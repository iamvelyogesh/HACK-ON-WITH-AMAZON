# from flask import Flask, jsonify
# import os
# import shutil
# import subprocess
# import textwrap
# import webbrowser
# import PIL.Image
# import google.generativeai as genai
# from IPython.display import display, Markdown
# from flask_cors import CORS
# import glob

# app = Flask(__name__)
# CORS(app)

# # Configuration for Google API
# os.environ['GOOGLE_API_KEY'] = "AIzaSyDgf5jfKC-3c5mgtJL4FHm7GyvSEWE1YHE"
# genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
# model = genai.GenerativeModel('gemini-pro-vision')

# # Function to convert text to Markdown format
# def to_markdown(text):
#     text = text.replace(' • ', '*')
#     return textwrap.indent(text, '> ', predicate=lambda _: True)

# # Function to run YOLOv5 detection
# def run_detection():
#     command = [
#         "python", "detect1.py", "--weights", "yolov5x.pt", "--source", "0",
#         "--project", "temp", "--name", "exp", "--save-crop", "--conf-thres", "0.5"
#     ]
#     result = subprocess.run(command, capture_output=True, text=True)
#     if result.returncode == 0:
#         return result.stdout
#     else:
#         return result.stderr

# # Function to remove a folder and its contents
# def remove_folder(folder_path):
#     try:
#         shutil.rmtree(folder_path)
#         return f"Removed folder {folder_path} and its contents"
#     except OSError as e:
#         return f"Error removing folder {folder_path}: {e}"
    
# def get_latest_file(path):
#     files = glob.glob(os.path.join(path, '**', '*'), recursive=True)
#     if not files:
#         return None
#     latest_file = max(files, key=os.path.getctime)
#     return latest_file

# # Define the base directory
# base_dir = 'temp/exp/crops'
# # Get the latest file in the base directory
# latest_file = get_latest_file(base_dir)

# if latest_file:
#     # Move the latest file to the base directory
#     shutil.move(latest_file, base_dir)

#     # Remove all category folders and their contents
#     for item in os.listdir(base_dir):
#         item_path = os.path.join(base_dir, item)
#         if os.path.isdir(item_path):
#             shutil.rmtree(item_path)

# print("Only the latest image retained in the exp folder.")

# # Endpoint to trigger image detection and Amazon search
# @app.route('/api/run-detection', methods=['GET'])
# def run_detection_and_search():
#     try:
#         # Run YOLOv5 detection
#         detection_output = run_detection()
#     #     command = [
#     #     "python", "detect1.py", "--weights", "yolov5x.pt", "--source", "0",
#     #     "--project", "temp", "--name", "exp", "--save-crop", "--conf-thres", "0.5"
#     # ]
#     #     result = subprocess.run(command, capture_output=True, text=True)
        
#         # Base folder containing all 'exp*' subfolders
#         base_folder = 'temp'

#         # Remove 'person' folder in all directories matching 'exp*'
#         for folder in os.listdir(base_folder):
#             if folder.startswith('exp'):
#                 person_folder = os.path.join(base_folder, folder, 'crops', 'person')
#                 if os.path.exists(person_folder):
#                     remove_folder(person_folder)
#                 else:
#                     print(f"The folder {person_folder} does not exist.")
#         # Get the latest file in the base directory
#         latest_file = get_latest_file(base_dir)
        
#         if latest_file:
#             # Move the latest file to the base directory
#             shutil.move(latest_file, base_dir)
        
#             # Remove all category folders and their contents
#             for item in os.listdir(base_dir):
#                 item_path = os.path.join(base_dir, item)
#                 if os.path.isdir(item_path):
#                     shutil.rmtree(item_path)

#         # Directory containing images
#         cracked_parts_dir = "./temp/exp/crops/"

#         # Iterate over each image in the directory
#         # search_terms = []
#         for root, dirs, files in os.walk(cracked_parts_dir):
#             for filename in files:
#                 if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
#                     # Open the image
#                     img_path = os.path.join(root, filename)
#                     img = PIL.Image.open(img_path)

#                     # Generate repair recommendations for the image
#                     response = model.generate_content(["Analyze the image and give me the color + searchword term to search in amazon. only 2 words no need sentence or explanation", img], stream=True)
#                     response.resolve()

#                     # Extract search terms (assuming they are separated by spaces)
#                     search_terms = response.text.split()[:5] # Limit to 2 keywords per image

#         # Construct Amazon search URL
#         # amazon_url = f"https://www.amazon.com/s?k={'+'.join(search_terms)}"

#         # Open the Amazon search URL in the default web browser (optional)
#         # webbrowser.open(amazon_url)

#         # Return search terms as JSON response
#         return jsonify({
#             'message': 'Detection and search completed successfully',
#             'searchTerms': search_terms,
#             'detectionOutput': detection_output
#         })

#     except Exception as e:
#         return jsonify({
#             'message': 'Error during detection and search',
#             'error': str(e)
#         })

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify
import os
import shutil
import subprocess
import textwrap
import webbrowser
import PIL.Image
import google.generativeai as genai
from flask_cors import CORS
import glob

app = Flask(__name__)
CORS(app)

# Configuration for Google API
os.environ['GOOGLE_API_KEY'] = "AIzaSyDgf5jfKC-3c5mgtJL4FHm7GyvSEWE1YHE"
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro-vision')

# Function to convert text to Markdown format
def to_markdown(text):
    text = text.replace(' • ', '*')
    return textwrap.indent(text, '> ', predicate=lambda _: True)

# Function to run YOLOv5 detection
def run_detection():
    command = [
        "python", "detect1.py", "--weights", "yolov5x.pt", "--source", "0",
        "--project", "temp", "--name", "exp", "--save-crop", "--conf-thres", "0.5"
    ]
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode == 0:
        return result.stdout
    else:
        return result.stderr

# Function to remove a folder and its contents
def remove_folder(folder_path):
    try:
        shutil.rmtree(folder_path)
        return f"Removed folder {folder_path} and its contents"
    except OSError as e:
        return f"Error removing folder {folder_path}: {e}"

def get_latest_file(path):
    files = glob.glob(os.path.join(path, '**', '*'), recursive=True)
    if not files:
        return None
    latest_file = max(files, key=os.path.getctime)
    return latest_file

# Endpoint to trigger image detection and Amazon search
@app.route('/api/run-detection', methods=['GET'])
def run_detection_and_search():
    try:
        # Run YOLOv5 detection
        detection_output = run_detection()
        
        # Base folder containing all 'exp*' subfolders
        base_folder = 'temp'

        # Remove 'person' folder in all directories matching 'exp*'
        for folder in os.listdir(base_folder):
            if folder.startswith('exp'):
                person_folder = os.path.join(base_folder, folder, 'crops', 'person')
                if os.path.exists(person_folder):
                    remove_folder(person_folder)
                else:
                    print(f"The folder {person_folder} does not exist.")

        # Directory containing images
        cracked_parts_dir = "./temp/exp/crops/"

        # Get the latest file in the base directory
        latest_file = get_latest_file(cracked_parts_dir)
        
        if latest_file:
            # Move the latest file to the base directory
            shutil.move(latest_file, cracked_parts_dir)
        
            # Remove all category folders and their contents
            for item in os.listdir(cracked_parts_dir):
                item_path = os.path.join(cracked_parts_dir, item)
                if os.path.isdir(item_path):
                    shutil.rmtree(item_path)

        # Iterate over each image in the directory
        search_terms = []
        for root, dirs, files in os.walk(cracked_parts_dir):
            for filename in files:
                if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
                    # Open the image
                    img_path = os.path.join(root, filename)
                    img = PIL.Image.open(img_path)

                    # Generate repair recommendations for the image
                    response = model.generate_content([
                        "Analyze the image and give me the color + searchword term to search in amazon. only 2 words no need sentence or explanation", 
                        img
                    ], stream=True)
                    response.resolve()

                    # Extract search terms (assuming they are separated by spaces)
                    search_terms.extend(response.text.split()[:2])  # Limit to 2 keywords per image

        # Construct Amazon search URL
        amazon_url = f"https://www.amazon.com/s?k={'+'.join(search_terms)}"

        # Open the Amazon search URL in the default web browser (optional)
        webbrowser.open(amazon_url)

        # Return search terms as JSON response
        return jsonify({
            'message': 'Detection and search completed successfully',
            'searchTerms': search_terms,
            'detectionOutput': detection_output
        })

    except Exception as e:
        return jsonify({
            'message': 'Error during detection and search',
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(debug=True)
