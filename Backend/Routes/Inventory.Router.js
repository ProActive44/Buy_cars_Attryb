const express = require("express");
const {
  getAllInventory,
  addInventory,
  deleteInventory,
  editInventory,
  getInventoryByID,
} = require("../Controllers/Inventory.controller");

const InventoryRouter = express.Router();

InventoryRouter.get("/", getAllInventory);
InventoryRouter.post("/", addInventory);
InventoryRouter.delete("/", deleteInventory);
InventoryRouter.put("/", editInventory);
InventoryRouter.get("/:id", getInventoryByID);

module.exports = InventoryRouter;
