/* eslint-disable no-console */

const redis = require('redis');

const client = redis.createClient();
client.connect();
const models = require('./model');

module.exports = {
  getProducts: (req, res) => {
    if (req.params.product_id) {
      models.getProductById(req.params)
        .then((response) => {
          const transformedData = models.transformProductId(req.params, response.rows);
          client.set(req.originalUrl, JSON.stringify(transformedData));
          res.status(200).send(transformedData);
        })
        .catch((error) => {
          console.error(error.stack);
          res.sendStatus(404);
        });
    }
    if (!req.params.product_id) {
      models.getProducts()
        .then((response) => {
          client.set(req.originalUrl, JSON.stringify(response.rows));
          res.status(200).send(response.rows);
        })
        .catch((error) => {
          console.error(error.stack);
          res.sendStatus(404);
        });
    }
  },

  getProductByIdWithStyles: (req, res) => {
    models.getProductByIdWithStyles(req.params)
      .then((response) => {
        const transformedData = models.transformProductByIdWithStyles(req.params, response.rows);
        client.set(req.originalUrl, JSON.stringify(transformedData));
        res.status(200).send(transformedData);
      })
      .catch((error) => {
        console.error(error.stack);
        res.sendStatus(404);
      });
  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.params)
      .then((response) => {
        const transformedData = models.transformRelatedProducts(response.rows);
        client.set(req.originalUrl, JSON.stringify(transformedData));
        res.status(200).send(transformedData);
      })
      .catch((error) => {
        console.error(error.stack);
        res.sendStatus(404);
      });
  },
};
