const userModel = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const userSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(403).send({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send({ msg: "Signup Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Signup failed", error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send({ msg: "No user found" });
    }

    const correct_pass = await bcrypt.compare(password, user.password);

    if (correct_pass) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(200).send({ msg: "Login Successful", token, user });
    } else {
      res.status(401).send({ msg: "Please enter the correct credentials" , data:user});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Login Failed", error: error.message });
  }
};



module.exports = { userSignup, userLogin };
