# Design - Data & AI for Crowd Monitor

## Data Collection

TODO(Pranavi1110): Fill this section based on your analysis.

## Sample dataset

TODO(ShashankVinnakota): Fill this section based on your analysis.

## Generic chatbots
Generic chatbots use : CHATGPT,GOOGLE GEMINI
Dataset Name  : Pothole Detection Dataset – by Atulyakumar98
Dataset Source : https://www.kaggle.com/datasets/atulyakumar98/pothole-detection-dataset
Domain : Computer Vision – Binary Image Classification (Pothole vs. Normal Road)
Data Description : Contains 300+ JPEG images grouped into two main categories: 
• potholes  – road images with visible potholes
• normal – road images without potholes
File Structure : Simple folder-based class separation with no nested folders. No separate train/test folders provided.
Image Resolution : Mixed resolutions — varies from low-quality compressed images to high-resolution road captures. Requires resizing before training.
Image Variety :
 Images vary in: 
• Lighting (daylight, cloudy, shaded)
• Camera angles (top-down, side view) 
• Road types (asphalt, concrete, rural paths)
Data Quality :
Moderate — Some images have low sharpness or contain background distractions (cars, pedestrians, road markings). No major noise or irrelevant content.
Potential Issues : 
Small dataset size → high risk of overfitting; 
No metadata;
No location/time diversity info; 
Folder labeling assumes perfect accuracy.

Dataset is suitable for beginners to practice binary classification.Mixed image qualities might help generalization but require normalization.Absence of bounding boxes limits use for object detection tasks.

TODO(architha-196): Fill this section based on your analysis.

## Pre-built APIs

## 🚧 Recommended APIs for Pothole Detection Prototype

### **High Priority**
1. **Roboflow YOLOv8 API** – Fastest option for building a working pothole detection model.  
   *Add-on:* Can also use **Google Gemini API** or **OpenAI Vision API** for detection and classification as a secondary or hybrid approach.  
2. **Expo Location API** – Tags pothole coordinates in the mobile app.  
3. **Google Maps SDK** – Displays detected potholes in both the app and dashboard.  

### **Medium Priority**
4. **Firebase Firestore + Storage** – Simple backend to store pothole data and images/videos.  
5. **Firebase Auth** – Enables commuter/engineer login with role-based UI.  
6. **Firebase Cloud Messaging (FCM)** – Sends updates on pothole resolution to users.  


## Vision Algorithms
TODO(Raavi-Havish): Fill this section based on your analysis.

YOLO (You Only Look Once) is a real-time object detection algorithm that uses a single neural network to simultaneously predict bounding boxes and class probabilities from full images.
Google Cloud Vision API – uses convolutional neural networks (CNNs) for image classification, object detection, and OCR.
Amazon Rekognition – employs deep learning models, mainly region-based CNNs (R-CNN variants), for face detection, object recognition, and video analysis.
Microsoft Azure Computer Vision – combines CNNs and transformer-based vision models for tagging, scene understanding, and OCR.
Clarifai API – utilizes CNNs and custom embedding models for visual search, detection, and classification tasks.

These APIs implement deep learning architectures such as CNNs, R-CNN variants, and transformer-based vision models to analyze images. The process generally involves feature extraction, object localization, and classification to provide insights from visual data. The analysis ensures accurate detection, categorization, and description of visual elements for integration into applications.

## Privacy

TODO(karthikG0017) : Fill this section based on your analysis.
