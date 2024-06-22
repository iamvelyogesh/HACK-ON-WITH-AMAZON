from flask import Flask, request, jsonify
import google.generativeai as genai
import os
import tempfile
import textwrap
from IPython.display import display
from IPython.display import Markdown
import PIL.Image
import os
import webbrowser

app = Flask(__name__)

# Set up GenerativeAI model
os.environ['GOOGLE_API_KEY'] = "AIzaSyDgf5jfKC-3c5mgtJL4FHm7GyvSEWE1YHE"
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro-vision')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the uploaded file to a temporary directory
    temp_dir = tempfile.mkdtemp()
    file_path = os.path.join(temp_dir, file.filename)
    file.save(file_path)

    # Perform analysis using GenerativeAI
    img = PIL.Image.open(file_path)
    response = model.generate_content(["Analyze the image and give me the color + searchword term to search in amazon.only 2 words no need sentence or explanation i repeat only searchword no sentence like The image is a photo of a flower. The flower is white and has a yello....", img], stream=True)
    response.resolve()

    # Extract search term (adjust this based on actual response format)
    search_term = response.text.split()[:2]

    # Construct Amazon search URL
    amazon_url = f"https://www.amazon.com/s?k={'+'.join(search_term)}"

    webbrowser.open(amazon_url)

    # Return response to frontend
    return jsonify({'search_term': search_term, 'amazon_url': amazon_url})

if __name__ == '__main__':
    app.run(debug=True)
