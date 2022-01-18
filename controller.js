/* eslint-disable no-console */
const models = require('./model');

module.exports = {
  getProducts: (req, res) => {
    if (req.params.product_id) {
      models.getProductById(req.params)
        .then((response) => {
          res.status(200).send(models.transformProductId(response.rows));
        })
        .catch((error) => {
          console.error(error.stack);
          res.sendStatus(404);
        });
    }
    if (!req.params.product_id) {
      models.getProducts()
        .then((response) => {
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
        res.status(200).send(models.transformProductByIdWithStyles(response.rows));
      })
      .catch((error) => {
        console.error(error.stack);
        res.sendStatus(404);
      });
  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.params)
      .then((response) => {
        res.status(200).send(models.transformRelatedProducts(response.rows));
      })
      .catch((error) => {
        console.error(error.stack);
        res.sendStatus(404);
      });
  },
};
