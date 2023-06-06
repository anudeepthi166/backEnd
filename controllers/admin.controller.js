//import index.js
const db = require("../models/index");

const expressAsyncHandler = require("express-async-handler");

//GET ALL USER DETAILS
exports.allUsers = expressAsyncHandler(async (req, res) => {
  //users
  let users = await db.User.findAll({
    attributes: {
      exclude: ["password", "roleId"],
    },
    include: {
      model: db.Role,
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
  });

  users = users.map((userObj) => {
    return userObj.dataValues;
  });
  // send response
  res.send({ message: "All Users", payload: users });
});

//GET ALLTASKS
exports.allTasks = expressAsyncHandler(async (req, res) => {
  //users
  let tasks = await db.TodoTasks.findAll({
    include: {
      model: db.User,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "email", "roleId"],
      },
    },
  });

  tasks = tasks.map((taskObj) => {
    return taskObj.dataValues;
  });

  // send response
  res.send({ message: "All Tasks", payload: tasks });
});
