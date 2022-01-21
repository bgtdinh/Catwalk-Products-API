/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
require('dotenv').config();
const newRelic = require('newrelic');
const express = require('express');
const cache = require('memory-cache');

const app = express();
const port = 4000;
const controller = require('./controller');

const memCache = new cache.Cache();

const cacheMiddleware = (duration) => (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  const cacheContent = memCache.get(key);
  if (cacheContent) {
    res.send(cacheContent);
  } else {
    res.sendResponse = res.json;
    res.json = (body) => {
      memCache.put(key, body, duration * 1000);
      res.sendResponse(body);
    };
    next();
  }
};

app.use(express.json());

app.get('/products/:product_id', cacheMiddleware(60), controller.getProducts);

app.get('/products', cacheMiddleware(60), controller.getProducts);

app.get('/products/:product_id/styles', cacheMiddleware(60), controller.getProductByIdWithStyles);

app.get('/products/:product_id/related', cacheMiddleware(60), controller.getRelatedProducts);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
