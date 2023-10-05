const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const ImageRouter = express.Router();

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store uploads in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueprefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueprefix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Handle image upload route
ImageRouter.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { filename, path } = req.file;
    res
      .status(200)
      .json({ message: "Image uploaded successfully", filename, path });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading image", error: error.message });
  }
});

ImageRouter.get("/:imageIdentifier", (req, res) => {
  try {
    const imageIdentifier = req.params.imageIdentifier;

    // Construct the absolute path to the image file with the desired directory structure
    const imagePath = path.join(__dirname, "..", "uploads", imageIdentifier);

    // Check if the file exists
    fs.access(imagePath, fs.constants.R_OK, (err) => {
      if (err) {
        return res.status(404).json({ message: "Image not found", err: err });
      }

      // Determine the Content-Type based on the file extension
      const fileExtension = path.extname(imagePath);
      let contentType = "";

      switch (fileExtension) {
        case ".jpg":
        case ".jpeg":
          contentType = "image/jpeg";
          break;
        case ".png":
          contentType = "image/png";
          break;
        // Add more cases for other image types if needed
        default:
          contentType = "application/octet-stream"; // Default to binary data
      }

      // Set the appropriate 'Content-Type' header
      res.setHeader("Content-Type", contentType);
      
      // Send the image file to the client
      res.sendFile(imagePath);
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving image", error: error.message });
  }
});

module.exports = ImageRouter;
