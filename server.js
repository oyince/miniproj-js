require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port;
app.use(express.json());

const products = require('./data/products');

app.listen(port, () => {
    console.log('API live on ${port}')}); 

app.get('/', (req, res) => {
  res.send('Product Inventory API is running');
});

app.get('/products', (req, res) => {
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
});

app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

