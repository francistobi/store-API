const product = require("../models/product");

const getAllProductStatic = async (req, res) => {
  const products = await product.find(req.query);
  res.status(200).json({ products, nbHits: products.length })
};
const getAllProduct = async (req, res) => {
  const {featured} =req.query
  const queryObigwe = {}
  const products = await product.find(req.query);
  res.status(200).json({ products, nbhits: products.length });
}

module.exports = {
  getAllProductStatic,
  getAllProduct,
};
