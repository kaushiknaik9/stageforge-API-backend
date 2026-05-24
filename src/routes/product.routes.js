const express = require("express");

const {
  getproducts,
  createproducts,
  updateproduct,
  deleteproduct,
} = require("../controllers/product.controller");

const validateProduct = require("../middlewares/validateProduct");
const protect = require("../middlewares/auth.middleware");

router = express.Router();

router.get("/", protect, getproducts);

router.post("/", protect, validateProduct, createproducts);

router.patch("/:id", protect, updateproduct);

router.delete("/:id", deleteproduct);

module.exports = router;
