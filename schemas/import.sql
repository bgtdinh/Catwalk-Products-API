\c productsapi;

copy products(id, product_name, slogan, product_description, category, default_price) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/product.csv' delimiter ',' csv header;

copy styles(id, product_id, style_name, sale_price, original_price, style_default) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/styles.csv' delimiter ',' csv header;

 copy photos(photo_id, styles_id, normal_url, thumbnail_url) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/photos.csv' delimiter ',' csv header;

 copy skus from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/skus.csv' delimiter ',' csv header;

  copy related from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/related.csv' delimiter ',' csv header;

  copy features from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/features.csv' delimiter ',' csv header;