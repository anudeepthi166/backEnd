//imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
  //get the bearer token
  let bearerToken = req.headers.authorization;

  //Check bearer token exists or not
  if (bearerToken) {
    //get the token
    let token = bearerToken.split(" ")[1];

    try {
      let decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded) {
        //successfullt decoded
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
