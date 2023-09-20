const express = require("express");
const cors = require("cors");

const connection = require("./Config/db");
const userRouter = require("./Routes/user.Router");
const authMiddleware = require("./Middlewares/auth.middleware");
const InventoryRouter = require("./Routes/Inventory.Router");
const OEMRouter = require("./Routes/OEM.Router");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the BUYC Corp");
});


app.use("/user", userRouter);
app.use(authMiddleware); 
app.use("/marketPlace", InventoryRouter);
app.use("/oemspec", OEMRouter);
app.use("*", (req, res) => {
  res.sendStatus(422);
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server up and running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
