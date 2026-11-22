const express = require("express");

const router = express.Router();

const { getBuyer, getBuyers, createBuyer, updateBuyer, deleteBuyer } = require("../controllers/buyerController");

router.get("/:id",  getBuyer);

router.get("/",  getBuyers);

router.post("/", createBuyer);

router.patch("/:id",  updateBuyer);

router.delete("/:id",  deleteBuyer);

module.exports = router;