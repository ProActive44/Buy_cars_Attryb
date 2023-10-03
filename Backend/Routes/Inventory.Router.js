const express = require("express");
const {
  getAllInventory,
  // addInventory,
  deleteInventory,
  editInventory,
  getInventoryByID,
} = require("../Controllers/Inventory.controller");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
})

const upload = multer({ storage: storage })

const InventoryRouter = express.Router();

const middle = (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  next();
};

InventoryRouter.get("/", getAllInventory);
InventoryRouter.post("/", upload.single("image"), async (req, res) => {
  console.log(req.files);
  try {
    const {
      image,
      title,
      description,
      oemSpecs,
      // colors,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
      price,
      dealer, // Temperary
    } = req.body;
    // const dealer = req.body._id;

    const uploadedFile = req.files;

    if (!uploadedFile) {
      return res.status(400).json({ message: "No file uploaded" });
    } else {
      return res.status(400).json({ message: "file uploaded 👍👍👍💕❤️😎" });
    }

    // Create a file URL based on where it was saved
    const fileURL = `/Images/${uploadedFile.filename}`;

    console.log(req.body);
    console.log(uploadedFile);
    console.log(fileURL);

    if (!title) {
      res.send({ msg: "No body" });
    }
    if (req.file === undefined) {
      res.send({ msg: "No file" });
    }
    const Inventory = new InventoryModel({
      dealer,
      oemSpecs,
      image,
      title,
      description,
      price,
      // colors,
      kmsOnOdometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace,
    });

    // await Inventory.save();

    res
      .status(201)
      .send({ message: "Car Inventory created successfully", Inventory });
  } catch (error) {
    res.status(500).send({
      message: "Failed to create Car Inventory",
      error: error.message,
    });
  }
});
InventoryRouter.delete("/", deleteInventory);
InventoryRouter.put("/", editInventory);
InventoryRouter.get("/:id", getInventoryByID);

module.exports = InventoryRouter;
