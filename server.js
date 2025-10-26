require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port;
app.use(express.json());

const { getAllProducts, getProductById, addProduct, delProductById} = require('./handlers/productHandlers');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/products', getAllProducts);

app.get('/products/:id', getProductById); 

app.post('/products', addProduct);

app.delete('/products/:id', delProductById);

// Start server
app.listen(port, () => {
    console.log(`API live on ${port}`)}); 