const Products = require("../models/product.model");
const asynchandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

const getproducts = asynchandler(async (req, res) => {
  const product = await Products.find().populate("createdBy, name mail");

  res.status(200).json({
    success: true,
    data: product,
    message: "Products Fetched Successfully",
  });
});

const createproducts = asynchandler(async (req, res) => {
  const product = await Products.create({
    ...req.body,
    createdBy: req.user.id,
  });

  res.status(201).json({
    success: true,
    data: product,
    message: "Project Created and stored !!",
  });
});

const updateproduct = asynchandler(async (req, res) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product) {
    throw new AppError("Product not Found", 404);
  }
  res.status(201).json({
    success: true,
    data: product,
    message: "Product Updated Success",
  });
});

const deleteproduct = (req, res) => {
  const product = Products.findByIdAndDelete(req.params.id);

  if (!product) {
    throw new AppError("Product Not Found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Product Deleted Success",
  });
};
module.exports = { getproducts, createproducts, updateproduct, deleteproduct };
