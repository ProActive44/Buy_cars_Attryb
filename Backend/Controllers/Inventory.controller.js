const InventoryModel = require("../Models/Inventory.model");

const addInventory = async (req, res) => {
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

    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).json({ message: "No file uploaded" });
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
};

const deleteInventory = async (req, res) => {
  const dealer = req.body._id;
  let { id } = req.query;
  if (!Array.isArray(id)) {
    id = [id];
  }
  try {
    const result = await InventoryModel.deleteMany({
      _id: { $in: id },
      dealer,
    });
    const deletedCount = result.deletedCount;

    if (deletedCount > 0) {
      res.status(201).send({
        message: `${deletedCount} car Inventory listings deleted`,
        Inventory: result,
        deletedCount: deletedCount,
      });
    } else {
      res
        .status(400)
        .send({ message: "No car Inventory listings found for the seller" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Failed to delete Car Inventory",
      error: error.message,
    });
  }
};

const editInventory = async (req, res) => {
  const dealer = req.body._id;
  const { id } = req.params;
  const updateFields = req.body;

  try {
    const Inventory = await InventoryModel.findOne({ _id: id, dealer });

    if (!Inventory) {
      return res
        .status(404)
        .send({ message: "Car Inventory listing not found" });
    }

    Inventory.set(updateFields);
    const updatedCarInventory = await Inventory.save();

    res.status(200).send({ Inventory: updatedCarInventory });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to edit Car Inventory", error: error.message });
  }
};

const getAllInventory = async (req, res) => {
  try {
    const filter = {};
    let Sort = {};
    const { q, lte, gte, sort, order, color } = req.query;
    if (sort && order) {
      if (sort === "mileage") {
        Sort = { [`oemSpecs.${sort}`]: order == "desc" ? -1 : 1 };
      } else {
        Sort = { [sort]: order == "desc" ? -1 : 1 };
      }
    }

    // if (q === "price" && lte) {
    //   filter.price = { $lte: parseInt(lte) };
    // }
    // if (q === "price" && gte) {
    //   filter.price = { $gte: parseInt(gte) };
    // }
    if (color) {
      filter.colors = { $in: [color] };
    }

    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { majorScratches: { $regex: q, $options: "i" } },
        { registrationPlace: { $regex: q, $options: "i" } },
      ];
    }

    if (!isNaN(parseFloat(q))) {
      // If `q` is a valid number, search numeric fields
      filter.$or.push({ kmsOnOdometer: parseFloat(q) });
      filter.$or.push({ price: parseFloat(q) });
      filter.$or.push({ accidentsReported: parseInt(q) });
      filter.$or.push({ previousBuyers: parseInt(q) });
    }

    const totalCount = await InventoryModel.countDocuments(filter);
    const OEMS = await InventoryModel.find(filter)
      .populate("oemSpecs", {})
      .sort(Sort);
    res.status(200).send({ totalCount, Inventory: OEMS });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to fetch Inventory", message: error.message });
  }
};

const getInventoryByID = async (req, res) => {
  try {
    let Inventory = await InventoryModel.findOne({ _id: req.params.id });
    res.status(200).send({ Inventory });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to fetch Inventory", message: error.message });
  }
};

module.exports = {
  addInventory,
  deleteInventory,
  editInventory,
  getAllInventory,
  getInventoryByID,
};
