const express = require("express");
const { userLogin, userSignup } = require("../Controllers/user.controller");

const userRouter = express.Router();

userRouter.use("/login", userLogin);
userRouter.use("/signup", userSignup);

module.exports = userRouter;
