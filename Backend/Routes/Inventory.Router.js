const express = require("express");
const {
  getAllInventory,
  addInventory,
  deleteInventory,
  editInventory,
  getInventoryByID,
} = require("../Controllers/Inventory.controller");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: '../Images/', // Destination folder for storing uploaded files
  filename: (req, file, callback) => {
    // Customize the filename if needed (e.g., add timestamps)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });



const InventoryRouter = express.Router();

InventoryRouter.get("/", getAllInventory);
InventoryRouter.post("/",  upload.single('image'), addInventory);
InventoryRouter.delete("/", deleteInventory);
InventoryRouter.put("/", editInventory);
InventoryRouter.get("/:id", getInventoryByID);

module.exports = InventoryRouter;
