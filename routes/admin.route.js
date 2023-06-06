//import express
const express = require("express");
const adminApp = express.Router();

//import middlewares
const {
  adminVerifyToken,
} = require("../middlewares/admin.verifyToken.middleware");

//import controller
const { allUsers, allTasks } = require("../controllers/admin.controller");

//defining routes
adminApp.get("/allUsers", adminVerifyToken, allUsers);
adminApp.get("/allTasks", adminVerifyToken, allTasks);

//export
module.exports = adminApp;
