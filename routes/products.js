const express = require("express");
const router = express.Router();
const {
  getAllProductStatic,
  getAllProduct,
} = require("../controllers/products")

router.get("/", getAllProduct);
// router.post("/", createProduct);
router.get("/static", getAllProductStatic);
// router.patch("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports =router