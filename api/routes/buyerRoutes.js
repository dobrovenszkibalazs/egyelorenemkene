const express = require("express");

const router = express.Router();

const { getBuyer, getBuyers, updateBuyer} = require("../controllers/buyerController");

router.get("/:id",  getBuyer);

router.get("/",  getBuyers);

router.patch("/:id",  updateBuyer);

module.exports = router;