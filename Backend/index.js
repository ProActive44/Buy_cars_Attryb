const express = require("express");

const app = express();

const connection = require("./Config/db");

app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server up and running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
