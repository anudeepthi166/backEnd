//express Router
const express = require("express");
const userApp = express.Router();

//import controllers
const { signUp, login } = require("../controllers/user.controller");

//Body Parser
userApp.use(express.json());

//defining routes
userApp.post("/sign-up", signUp);
userApp.post("/login", login);

//export userApp
module.exports = userApp;
