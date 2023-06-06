//imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.userVerifyToken = (req, res, next) => {
  //get the bearer token
  let bearerToken = req.headers.authorization;

  //Check bearer token exists or not
  if (bearerToken) {
    //get the token
    let token = bearerToken.split(" ")[1];

    try {
      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      //check role
      if (decoded.role === "user") {
        next();
      }
    } catch (err) {
      res.send({ message: "Please Relogin" });
    }
  }
  // if no bearer token
  else {
    res.status(401).send({ message: "Unauthorized Access" });
  }
};
