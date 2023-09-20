const { Schema, model } = "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required },
    email: { type: String, required },
    password: { type: String, required },
  },
  { versionKey: false, timestamps: true }
);

const userModel = model("user", userSchema);

module.exports = userModel;
