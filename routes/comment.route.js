//imports
const express = require("express");
const commentApp = express.Router();

//import middlewares
const { verifyToken } = require("../middlewares/verifyToken.middleware");

//Body Parser
commentApp.use(express.json());

//import middlewares
const {
  addComment,
  updateComment,
} = require("../controllers/comment.controller");

//defining routes
commentApp.post("/:taskId", verifyToken, addComment);
commentApp.put("/:commentId", verifyToken, updateComment);

//export
module.exports = commentApp;
