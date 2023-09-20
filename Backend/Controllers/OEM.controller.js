const OEMModel = require("../Models/OEM.model");

const getAllOEMS = async (req, res) => {
  try {
    const filter = {};
    const { model } = req.query;
    if (model) {
      const regexPattern = new RegExp(model, "i");
      filter.model = regexPattern;
    }
    const totalCount = await OEMModel.countDocuments(filter);
    const oems = await OEMModel.find(filter);

    res.status(200).send({ data: oems, totalCount });
  } catch (error) {
    console.log("error:", error);
    res
      .status(500)
      .send({ message: "Failed to fetch OEM", error: error.message });
  }
};

const addOEM = async (req, res) => {
  try {
    const { model, year, listPrice, colors, mileage, power, maxSpeed } =
      req.body;

    const provider = req.user._id;

    const newOEM = new OEMModel({
      model,
      year,
      listPrice,
      colors,
      mileage,
      power,
      maxSpeed,
      provider,
    });

    await newOEM.save();

    return res
      .status(201)
      .send({ message: "OEM created successfully", newOEM });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to create OEM", error: error.message });
  }
};

const getOEMByID = async (req, res) => {
  const { id } = req.params;

  try {
    const OEM = await OEMModel.findById(id);

    if (!OEM) {
      return res.status(404).send({ error: "OEM not found" });
    }
    res.status(200).send(OEM);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to fetch OEM", error: error.message });
  }
};

module.exports = { getAllOEMS, addOEM, getOEMByID };
