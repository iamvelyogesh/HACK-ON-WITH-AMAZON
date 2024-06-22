# Enhanced Shopping Experience with Visual AI and Computer Vision

## Overview
In today's digital age, enhancing the shopping experience through innovative technologies is crucial for engaging customers and driving sales. Leveraging the power of visual AI and computer vision, we aim to revolutionize how users search, discover, and interact with products online. This project focuses on integrating advanced image recognition, natural language processing, and computer vision technologies to create a seamless, personalized, and engaging shopping experience.

## Problem Statement
Traditional e-commerce platforms often rely on text-based search and recommendations, which can be limiting and less intuitive for users. Customers increasingly seek more interactive and visually-driven ways to shop. Our solution addresses these challenges by:

- **Developing advanced image recognition**: To identify products in user-uploaded images and videos accurately.
- **Analyzing user preferences and behaviors**: Using visual AI to suggest visually similar products and enhance personalized recommendations.
- **Identifying and tagging products in video content**: Providing clickable links for direct purchase, transforming passive viewing into an interactive shopping experience.
- **Combining natural language processing with computer vision**: To accurately identify products in text, images, or videos, improving the accuracy and relevance of search results.
- **Implementing a visual search bar**: Allowing users to find similar products by uploading images, making the search process more intuitive and efficient.
- **Offering real-time search suggestions based on visual input**: Enhancing the user experience by providing immediate and relevant product suggestions.

## Solution
Our solution merges cutting-edge visual AI with Amazon Prime's X-Ray, enabling users to seamlessly explore and buy products featured in video content, redefining entertainment as an immersive shopping experience. It excels in the following aspects:

### Interactive Objects Tab
1. **Create an interactive "Objects" tab within the X-Ray interface**:
   - Display a list of all detected items in the current video frame.
   - Users can click on any tagged item to view more details and options.

### Object Detection and Tagging
1. **Implement state-of-the-art object detection algorithms**:
   - Identify products, logos, and items within each frame of the video.
2. **Tag each detected item with relevant metadata**:
   - Include product name, brand, and other identifying information.

### Advanced Video Analysis
1. **Develop a sophisticated video analysis system**:
   - Integrate this system with Amazon Prime's X-Ray feature to enhance its capabilities.

### Seamless Integration with Amazon.com
1. **When a user clicks on a tagged item in the Objects tab**:
   - Seamlessly pass the image details to Amazon.com's search bar.
   - Utilize advanced image recognition techniques to extract key visual features from the clicked item.
   - Initiate a search query on Amazon.com using these extracted features to find visually similar products.

### Improved Item Identification
1. **Enhance item identification within text, images, and video content**:
   - Leverage visual AI to accurately recognize products, brands, and attributes.
   - Enable seamless integration with the shopping experience.

### User-Friendly Interface
1. **Design a user-friendly interface**:
   - Seamlessly integrate visual AI technology.
   - Provide intuitive features for product search, recommendations, and item identification across text, images, and video content.

### Product Search Enhancement
1. **Enhance product search functionality**:
   - Allow users to search for items using images captured from their devices or screenshots.
   - Leverage visual AI for accurate product identification.

### Real-Time Object Detection
1. **Implement real-time object detection in video content**:
   - Enable users to click on detected items to view product details or directly add them to their shopping cart for purchase.

### Content-Based Discovery
1. **Recommend visually similar items seen in videos or images**:
   - Suggest products related to users' interests based on visual content analysis.

## Practical Use Case
A user watching a movie on Amazon Prime can pause the movie, click on an image of a product they like, and be redirected to the product page on Amazon to buy it. Similarly, in Amazon Shopping, users can upload an image file or perform a live scan to find products visually matched by the system.

### Customers
Our solution targets a diverse range of individuals engaging with digital content on platforms like Amazon Prime, including:

- **Avid Shoppers**: Individuals who frequently make online purchases and seek efficient, enjoyable shopping experiences.
- **Tech Enthusiasts**: Users who are early adopters of new technologies and are keen on integrating innovative solutions into their daily routines.
- **Entertainment Aficionados**: Viewers who spend significant time consuming digital media and appreciate seamless, interactive experiences.
- **Integrated Shopping Seekers**: Users who prefer a unified experience where entertainment and shopping intersect, allowing them to purchase products directly from the content they consume.

# Project Prototype: Amazon Prime & Amazon Shopping

This repository contains prototypes for Amazon Prime and Amazon Shopping applications, demonstrating both frontend and backend setups.

## Amazon Prime

### Backend Setup

1. **Run Backend**: Execute the Backend.ipynb notebook found in `Prime Backend/` to generate the Segments folder.


2. **Download YOLO Files**: [Download YOLO files](https://drive.google.com/drive/folders/1RvFRm23dIamM8nfZIRcrxuMnGJKevvUR?usp=sharing).

3. **Download Data Video**: [Download data video files](https://drive.google.com/drive/folders/1rtLg6f-_avskim5pNIo9eyD4oOKsIMMh?usp=sharing).

### Frontend Setup

1. **Copy Segments Folder**: Move the generated Segments folder from the backend to `src/`.

2. **Install Dependencies**:

       ```bash
            npm install
            mui install
            npm start
        ```

3. **Frontend Starts**


## Amazon Shopping

### Frontend Setup

1. **Install Dependencies**:
      ```bash
            npm install
            npm start
        ```

### Backend Setup

1. **Live Detection**: 
       ```bash
            python app2.py
        ```

2. **Image Detection**:
        ```bash
            python app.py
        ```

3. **Download YOLO Files**: [Download YOLO files](https://drive.google.com/drive/folders/1RvFRm23dIamM8nfZIRcrxuMnGJKevvUR?usp=sharing).

4. **Download Data Video**: [Download data video files](https://drive.google.com/drive/folders/1rtLg6f-_avskim5pNIo9eyD4oOKsIMMh?usp=sharing).





