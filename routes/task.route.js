//express router
const express = require("express");
const taskApp = express.Router();

//import middleware
const { verifyToken } = require("../middlewares/verifyToken.middleware");

//import controllers
const {
  addTask,
  editTask,
  allTasks,
  completedTask,
} = require("../controllers/task.controller");

//Body parser
taskApp.use(express.json());

//defining routes
taskApp.post("/:taskName", verifyToken, addTask);
taskApp.put("/:taskId", verifyToken, editTask);
taskApp.put("/completedTask/:taskId", verifyToken, completedTask);
taskApp.get("/allTasks/:userId", verifyToken, allTasks);

//export taskApp
module.exports = taskApp;
