const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ImageUpload = express.Router();

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/"); // Specify the folder where images will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Route for uploading images
ImageUpload.post("/", upload.single("image"), (req, res) => {
  console.log("post");
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Access the uploaded file via req.file
  const imageUrl = `/Images/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// Route for retrieving a list of all files
ImageUpload.get("/", (req, res) => {
  const imageDirectory = path.join(__dirname, "../Images");

  // Read the files in the image directory
  fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Error reading image directory" });
    }

    // Return the list of filenames
    res.status(200).json({ files });
  });
});

module.exports = ImageUpload;
