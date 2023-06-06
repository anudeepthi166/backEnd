const expressAsyncHandler = require("express-async-handler");

//index file
const db = require("../models/index");

// ADD TASK
exports.addTask = expressAsyncHandler(async (req, res) => {
  //insert the data
  let taskObj = await db.TodoTasks.create(req.body);
  if (taskObj?.dataValues) {
    // send response
    res.status(201).send({
      message: "Task added successfully",
      payload: taskObj.dataValues,
    });
  }
});

//UPDATE TASK
exports.editTask = expressAsyncHandler(async (req, res) => {
  //perform update operation
  let [updated] = await db.TodoTasks.update(
    { taskName: req.body.taskName },
    {
      where: {
        id: req.params.taskId,
      },
    }
  );

  if (updated) {
    // send response
    res.send({ message: "Updated Successfully" });
  }
});

//COMPLETED THE TASK
exports.completedTask = expressAsyncHandler(async (req, res) => {
  //update status
  let [updated] = await db.TodoTasks.update(
    { status: true },
    {
      where: {
        id: req.params.taskId,
      },
    }
  );
  if (updated) {
    // send response
    res.send({ message: "Task Completed" });
  }
});

//GET ALL TASKS OF A USER
exports.allTasks = expressAsyncHandler(async (req, res) => {
  //get tasks
  let tasks = await db.TodoTasks.findAll({
    where: {
      userId: req.params.userId,
    },
    // include models
    include: {
      model: db.Comment,
      attributes: {
        exclude: ["id", "createdAt", "taskId"],
      },
    },
    attributes: {
      exclude: ["userId"],
    },
  });
  tasks = tasks?.map((taskObj) => taskObj.dataValues);
  // send response
  res.send({ message: "All Tasks", payload: tasks });
});
