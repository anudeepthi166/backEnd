//imports
const expressAsyncHandler = require("express-async-handler");
const db = require("../models");

// ADD COMMENT
exports.addComment = expressAsyncHandler(async (req, res) => {
  let comment = await db.Comment.create(req.body);
  // send response
  res.status(201).send({ message: "Comment Added" });
});

// UPDATE COMMENT
exports.updateComment = expressAsyncHandler(async (req, res) => {
  let [updated] = await db.Comment.update(req.body, {
    where: { id: req.params.commentId },
  });
  // send response
  res.status(200).send({ message: "Comment Updated" });
});
