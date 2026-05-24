const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success: true,
      message: "Name and Price Both are Required",
    });
  }
  next();
};

module.exports = validateProduct;
