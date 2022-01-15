const models = require('./model');

module.exports = {
  getProducts: (req, res) => {
    models.getProducts()
    .then( (response) => {
      console.log(response.rows[0]);
    })
    .catch( (error) => {
      console.error(error.stack);
    });
  },

  getProductById:(req, res) => {
    models.getProductById(req.query)
    .then( (response) => {
      console.log(response.rows[0]);
    })
    .catch( (error) => {
      console.error(error.stack);
    });

  },

  getProductByIdWithStyles: (req, res) => {
    models.getProductByIdWithStyles(req.query)
    .then( (response) => {
      console.log(response.rows[0]);
    })
    .catch( (error) => {
      console.error(error.stack);
    });


  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.query)
    .then( (response) => {
      console.log(response.rows[0]);
    })
    .catch( (error) => {
      console.error(error.stack);
    });
  }
}



