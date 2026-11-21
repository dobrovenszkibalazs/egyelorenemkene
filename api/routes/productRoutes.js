const express = require("express");

const router = express.Router();

const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

router.get("/:id",  getProduct);

router.get("/",  getProducts);

router.post("/", createProduct);

router.patch("/:id",  updateProduct);

router.delete("/:id",  deleteProduct);

module.exports = router;