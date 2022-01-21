\c productsapi;

copy products(id, product_name, slogan, product_description, category, default_price) from '../data/product.csv' delimiter ',' csv header;

copy styles(id, product_id, style_name, sale_price, original_price, style_default) from '../data/styles.csv' delimiter ',' csv header;

 copy photos(photo_id, styles_id, normal_url, thumbnail_url) from '../data/photos.csv' delimiter ',' csv header;

 copy skus from '../data/skus.csv' delimiter ',' csv header;

  copy related from '../data/related.csv' delimiter ',' csv header;

  copy features from '../data/features.csv' delimiter ',' csv header;