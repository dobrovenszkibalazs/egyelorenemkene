const express = require("express");

const router = express.Router();

const { getGame, getGames, createGame, updateGame, deleteGame } = require("../controllers/gameController");

router.get("/:id",  getGame);

router.get("/",  getGames);

router.post("/", createGame);

router.patch("/:id",  updateGame);

router.delete("/:id",  deleteGame);

module.exports = router;