require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;
const controller = require('./controller');

app.use(express.json());

app.get('/products', controller.getProducts);

app.get('/products/productId', controller.getProductById);

app.get('/products/styles', controller.getProductByIdWithStyles);

app.get('/products/related', controller.getRelatedProducts);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
