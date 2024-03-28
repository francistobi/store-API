const product = require("../models/product");

const getAllProductStatic = async (req, res) => {
  const search = "c";
  const products = await product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProduct = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = {$regex: name, $options: "i"};
  }
  const products = await product.find(queryObject);
  res.status(200).json({ products, nbhits: products.length });
};

module.exports = {
  getAllProductStatic,
  getAllProduct,
};
