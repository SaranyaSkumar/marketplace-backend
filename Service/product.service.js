const Product = require("../Models/products");

const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (e) {
    throw e;
  }
};

const getProduct = async () => {
  try {
    const products = await Product.findById(payload);
    return products;
  } catch (e) {
    throw e;
  }
};

const getProducts = async (payload) => {
  try {
    const products = await Product.find(payload);
    return products;
  } catch (e) {
    throw e;
  }
};

const updateProduct = async ({id, updateData}) => {
  try {
    const result = await Product.updateOne({ _id: id }, { $set: updateData });
    return result;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
};
