const express = require("express");

const router = express.Router();

const { getOrder, getOrders, createOrder, updateOrder, deleteOrder } = require("../controllers/orderController");

router.get("/:id",  getOrder);

router.get("/",  getOrders);

router.post("/", createOrder);

router.patch("/:id",  updateOrder);

router.delete("/:id",  deleteOrder);

module.exports = router;