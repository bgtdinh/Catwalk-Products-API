/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

require('dotenv').config();
// const newRelic = require('newrelic');
const express = require('express');
// const cache = require('memory-cache');
const redis = require('redis');
const controller = require('./controller');

const indexClient = redis.createClient();
const app = express();
const port = 4000;

indexClient.connect();

// const memCache = new cache.Cache();

// const cacheMiddleware = (duration) => (req, res, next) => {
//   const key = `__express__${req.originalUrl}` || req.url;
//   const cacheContent = memCache.get(key);
//   if (cacheContent) {
//     res.send(cacheContent);
//   } else {
//     res.sendResponse = res.json;
//     res.json = (body) => {
//       memCache.put(key, body, duration * 1000);
//       res.sendResponse(body);
//     };
//     next();
//   }
// };

const cacheRedisMiddleware = (req, res, next) => {
  indexClient.get(req.originalUrl)
    .then((response) => {
      if (response) {
        res.json(JSON.parse(response));
      } else {
        next();
      }
    });
};

app.use(express.json());

app.get('/products/:product_id', cacheRedisMiddleware, controller.getProducts);

app.get('/products', cacheRedisMiddleware, controller.getProducts);

app.get('/products/:product_id/styles', cacheRedisMiddleware, controller.getProductByIdWithStyles);

app.get('/products/:product_id/related', cacheRedisMiddleware, controller.getRelatedProducts);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
