const db = require('./connection');

module.exports = {
  getProducts: () => {
    let sql = 'select * from products limit 5';
    return db.query(sql);
  },

  getProductById: (params) => {
    let sql = 'select products.id, products.product_name, products.slogan, products.product_description, products.category, products.default_price, features.feature, features.feature_value from products inner join features on products.id=features.product_id where products.id=?';
    return db.query(sql, params);
  },

  getProductByIdWithStyles: (params) => {
    let sql = 'select styles.product_id, styles.id, styles.style_name, styles.original_price, styles.sale_price, styles.style_default, skus.size, skus.quantity, photos.normal_url, photos.thumbnail_url from styles inner join skus on styles.id=skus.styles_id inner join photos on styles.id=photos.styles_id where styles.product_id=?';
    return db.query(sql, params);
  },

  getRelatedProducts: (params) => {
    let sql = `select * from related where (product_id=?)`;
    return db.query(sql, params);
  }
}