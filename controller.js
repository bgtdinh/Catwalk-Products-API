const models = require('./model');

module.exports = {
  getProducts: (req, res) => {
    models.getProducts()
    .then( (response) => {
      res.status(201).send(response.rows);
    })
    .catch( (error) => {
      console.error(error.stack);
      res.sendStatus(404);
    });
  },

  getProductById:(req, res) => {
    models.getProductById(req.query)
    .then( (response) => {
      res.status(201).send(models.transformProductId(response.rows));
    })
    .catch( (error) => {
      console.error(error.stack);
      res.sendStatus(404);
    });

  },

  getProductByIdWithStyles: (req, res) => {
    models.getProductByIdWithStyles(req.query)
    .then( (response) => {
      res.status(201).send(response.rows);
    })
    .catch( (error) => {
      console.error(error.stack);
      res.sendStatus(404);
    });


  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.query)
    .then( (response) => {
      res.status(201).send(models.transformRelatedProducts(response.rows));
    })
    .catch( (error) => {
      console.error(error.stack);
      res.sendStatus(404);
    });
  }
}



