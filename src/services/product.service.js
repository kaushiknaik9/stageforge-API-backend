const Products = require("../models/product.model");

const getAllProducts = async (queryObj) => {
  const {
    page = 1,
    limit = 5,
    sort = "-createdBy",
    category,
    search,
  } = queryObj;

  filter = {};

  if (category) {
    filter.category = category;
  }

  if (search) {
    filter.name = {
      $regex: search,
      $option: "i",
    };
  }

  const skip = (page - 1) * limit;

  const products = Products.find(filter)
    .select("name price")
    .sort(sort)
    .skip(skip)
    .limit(limit);

  return products;
};

module.exports = getAllProducts;
