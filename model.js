const db = require('./connection');

const getPhotosbyStyleId = (style_id, styles) => {
// result is an array of objects
// thumbnail_url:
// url:
  var result = {};

for( let i = 0; i < styles.length; i++) {
  if(style_id === styles[i].id) {
    result[styles[i].photo_id] = {thumbnail_url: styles[i].thumbnail_url, url: styles[i].normal_url};

  }
}

var finalResult = [];

for( let photoId in result) {
  finalResult.push(result[photoId]);
}

  return finalResult;
};

const getSkusbyStyleId = (style_id, styles) => {
  //result is object of objects
  //sku_id: {quantity:, size:}
  var result = {};

  for(let i = 0; i < styles.length; i++) {
    if(style_id === styles[i].id) {
      result[styles[i].sku_id] = {quantity: styles[i].quantity, size: styles[i].size};
    }
  }
  return result;
};

module.exports = {
  getProducts: () => {
    const sql = 'select * from products limit 5';
    return db.query(sql);
  },

  getProductById: (params) => {
    const sql = 'select products.id, products.product_name, products.slogan, products.product_description, products.category, products.default_price, features.feature, features.feature_value from products inner join features on products.id=features.product_id where products.id= $1';
    return db.query(sql, [parseInt(params.product_id, 10)]);
  },

  getProductByIdWithStyles: (params) => {
    const sql = 'select styles.product_id, styles.id, styles.style_name, styles.original_price, styles.sale_price, styles.style_default, skus.sku_id, skus.size, skus.quantity, photos.photo_id, photos.normal_url, photos.thumbnail_url from styles inner join skus on styles.id=skus.styles_id inner join photos on styles.id=photos.styles_id where styles.product_id=$1';
    return db.query(sql, [parseInt(params.product_id, 10)]);
  },

  getRelatedProducts: (params) => {
    const sql = 'select * from related where (product_id=$1)';
    return db.query(sql, [parseInt(params.product_id, 10)]);
  },

  transformRelatedProducts: (arrayOfRelated) => {
    var result = [];
    for(let i = 0; i < arrayOfRelated.length; i++) {
      result.push(arrayOfRelated[i].related_id);
    }
    return result;
  },

  transformProductId: (product) => {
    var feature = [];
    for(let i = 0; i < product.length; i++) {
        let object = {feature: product[i].feature, value: product[i].feature_value};
        feature.push(object);
    };
    var result = {
      id: product[0].id,
      name: product[0].product_name,
      slogan: product[0].slogan,
      description: product[0].product_description,
      category: product[0].category,
      default_price: product[0].default_price,
      features: feature
    };
    return result;
  },
  transformProductByIdWithStyles: (styles) => {
    var result = {
      product_id: styles[0].product_id,
      results: [],
    }
    var tempResult = {};
    var secondTempResult = [];
    for(let i = 0; i < styles.length; i++) {
      tempResult[styles[i].id] = {
        styles_id: styles[i].id,
        name: styles[i].style_name,
        original_price: styles[i].original_price,
        sale_price: styles[i].sale_price,
        'default?': styles[i].style_default,
        photos: getPhotosbyStyleId(styles[i].id, styles),
        skus: getSkusbyStyleId(styles[i].id, styles),
      };
    }

    for ( let styleId in tempResult) {
        secondTempResult.push(tempResult[styleId]);
    }

    result.results = secondTempResult;
    return result;
  }
}