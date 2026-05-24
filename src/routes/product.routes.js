const express = require("express");

const {
  getproducts,
  createproducts,
  updateproduct,
  deleteproduct,
} = require("../controllers/product.controller");

const validateProduct = require("../middlewares/validateProduct");

router = express.Router();

router.get("/", getproducts);

router.post("/", validateProduct, createproducts);

router.patch("/:id", validateProduct, updateproduct);

router.get("/:id", deleteproduct);

module.exports = router;
