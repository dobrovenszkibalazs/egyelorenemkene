const express = require("express");

const router = express.Router();

const { getComment, getComments, createComment, updateComment, deleteComment } = require("../controllers/commentController");

router.get("/:id",  getComment);

router.get("/",  getComments);

router.post("/", createComment);

router.patch("/:id",  updateComment);

router.delete("/:id",  deleteComment);

module.exports = router;