const express = require("express");
const cors = require("cors");

const connection = require("./Config/db");
const userRouter = require("./Routes/user.Router");
const authMiddleware = require("./Middlewares/auth.middleware");
const InventoryRouter = require("./Routes/Inventory.Router");
const OEMRouter = require("./Routes/OEM.Router");
const ImageUpload = require("./Routes/ImageUpload");

const app = express();

const formData = require('express-form-data');


app.use(cors());
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(formData.parse());

app.get("/", (req, res) => { 
  res.send("Welcome to the BUYC Corp");
});

app.use("/user", userRouter);
app.use("/upload/image", ImageUpload);

app.use((req, res, next) => {
  // Skip authentication for /user/login and /user/signup routes
  if (
    req.path === "/user/login" ||
    req.path === "/user/signup" ||
    req.path === "/upload/image"
  ) {
    next();
  } else if (req.method === "GET" && req.path === "/marketPlace") {
    // Skip authentication for GET requests on /marketPlace
    next();
  } else {
    // Require authentication for other routes
    // authMiddleware(req, res, next);
    next();
  }
});

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
