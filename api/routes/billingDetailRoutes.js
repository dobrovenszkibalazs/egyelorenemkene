const express = require("express");

const router = express.Router();

const { getBillingDetail, getBillingDetails, createBillingDetail, updateBillingDetail, deleteBillingDetail } = require("../controllers/billingDetailController");

router.get("/:id",  getBillingDetail);

router.get("/",  getBillingDetails);

router.post("/", createBillingDetail);

router.patch("/:id",  updateBillingDetail);

router.delete("/:id",  deleteBillingDetail);

module.exports = router;