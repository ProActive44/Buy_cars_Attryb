const express = require("express");
const {
  addOEM,
  getOEMByID,
  getAllOEMS,
} = require("../Controllers/OEM.controller");

const OEMRouter = express();

OEMRouter.get("/", getAllOEMS);
OEMRouter.post("/", addOEM);
OEMRouter.get("/:id", getOEMByID);

module.exports = OEMRouter;
