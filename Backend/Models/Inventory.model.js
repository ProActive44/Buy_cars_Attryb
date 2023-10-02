const { Schema, model } = require("mongoose");

const InventorySchema = new Schema(
  {
    dealer: { type: Schema.Types.ObjectId, ref: "user", required: true },
    oemSpecs: { type: Schema.Types.ObjectId, ref: "OEMSpec", required: true },
    title: { type: String, required: true },
    image: { data: Buffer, contentType: String },
    description: { type: String, required: true },
    price: { type: Number },
    kmsOnOdometer: { type: Number },
    majorScratches: { type: String },
    originalPaint: { type: Boolean },
    accidentsReported: { type: Number },
    previousBuyers: { type: Number },
    registrationPlace: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const InventoryModel = model("oldCar", InventorySchema);

module.exports = InventoryModel;
