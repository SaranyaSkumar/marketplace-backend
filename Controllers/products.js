const Product = require("../Models/products");
const productService = require("../Service/product.service");

const create_product = async (req, res) => {
  try {
    const products = await productService.createProduct(req.body);
    res.json({ message: "success", result: products });
  } catch (e) {
    res.json({ message: "error", error: e.message });
  }
};

const get_product = async (req, res) => {
  try {
    const products = await productService.getProduct(req.body);
    res.json({ message: "success", result: products });
  } catch (e) {
    res.json({ message: "error", error: e.message });
  }
};

const get_products = async (req, res) => {
  try {
    const products = await productService.getProducts(req.query);
    res.json({ messagse: "success", result: products });
  } catch (e) {
    res.json({ message: "error", error: e.message });
  }
};

const update_product = async (req, res) => {
  try {
    const products = await productService.updateProduct(req.body);
    res.json({ message: "success", result: products });
  } catch (e) {
    res.json({ message: "error", error: e.message });
  }
};

module.exports = {
  create_product,
  get_product,
  get_products,
  update_product,
};
