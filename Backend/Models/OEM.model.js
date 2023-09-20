const { Schema, model } = require("mongoose");

const OEMSchema = new Schema(
  {
    model: { type: String, required: true },
    year: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    colors: [{ type: String }],
    mileage: { type: Number },
    power: { type: String },
    maxSpeed: { type: String },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const OEMModel = model("OEMSpec", OEMSchema);

module.exports = OEMModel;
