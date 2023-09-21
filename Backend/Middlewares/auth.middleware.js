require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({ msg: "Unauthorized: Token missing" });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        console.error(err); 
        return res.status(401).send({ msg: "Unauthorized: Token invalid" });
      }
      if (decoded) {
        req.body._id = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.error(error); 
    res.status(500).send({ msg: "Internal Server Error: Authorization failed" });
  }
};

module.exports = authMiddleware;
