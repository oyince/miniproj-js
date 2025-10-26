const products = require('../data/products');

//GET all products
const getAllProducts = (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({
      message: 'No products found',
      data: []
    });
  }
  res.status(200).json({
    message: 'Products retrieved successfully',
    data: products
  });
};

const getProductById = (req, res) => {
  let product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

const addProduct = (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const delProductById = (req, res) => {
  // Find the product index by ID
  let index = products.findIndex(p => p.id == req.params.id);

  // If not found, send 404
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Remove the product from the array
  products.splice(index, 1);

  // Return success message
  res.status(200).json({ message: 'Product deleted successfully' });
};


module.exports = { getAllProducts, getProductById, addProduct, delProductById};