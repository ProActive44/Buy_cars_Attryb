const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((error) => console.log("Failed to connect to Database",error));

module.exports = connection;
