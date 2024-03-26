const product = require("../models/product");

const getAllProductStatic = async (req, res) => {
  const products = await product.find(req.query);
  res.status(200).json({ products, nbHits: products.length })
};
const getAllProduct = async (req, res) => {
  const {featured, company, name} =req.query
  const queryObject = {}
  if(featured) {
    queryObject.featured = featured === "true"? true :false
  }
  if(company) {
    queryObject.company = company
  }
  if(name) {
    queryObject.name = name;
  }
  const products = await product.find(queryObject);
  res.status(200).json({ products, nbhits: products.length });
}

module.exports = {
  getAllProductStatic,
  getAllProduct,
};
