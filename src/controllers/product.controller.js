products = [];

const getproducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Products Fetched Successfully",
  });
};

const createproducts = (req, res) => {
  const newproduct = {
    id: Date.now(),
    ...req.body,
  };

  products.push(newproduct);

  res.status(201).json({
    success: true,
    message: "Project Created and stored !!",
  });
};

const updateproduct = (req, res) => {
  id = req.params.id;

  products = products.map((product) =>
    product.id == id ? { ...product, ...req.body } : product,
  );

  res.status(201).json({
    success: true,
    message: "Product Updated Success",
  });
};

const deleteproduct = (req, res) => {
  id = req.params.id;

  products = products.filter((product) => product.id != id);

  res.status(204).json({
    success: true,
    message: "Product Deleted Success",
  });
};
module.exports = { getproducts, createproducts, updateproduct, deleteproduct };
