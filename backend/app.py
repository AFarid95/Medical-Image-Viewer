import os
from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename

imagesDir = "images"

if not os.path.isdir(imagesDir):
    os.mkdir(imagesDir)

app = Flask(__name__)
CORS(app)

@app.post("/images")
def upload_image():
    image = request.files['image']
    image.save(imagesDir + "/" + secure_filename(image.filename))
    return ""

@app.get("/imageIDs")
def get_all_image_IDs():
    return [imageID for imageID in os.listdir(imagesDir)]