const express = require("express");

const router = express.Router();

const { getSeller, getSellers, createSeller, updateSeller, deleteSeller } = require("../controllers/gameController");

router.get("/:id",  getSeller);

router.get("/",  getSellers);

router.post("/", createSeller);

router.patch("/:id",  updateSeller);

router.delete("/:id",  deleteSeller);

module.exports = router;