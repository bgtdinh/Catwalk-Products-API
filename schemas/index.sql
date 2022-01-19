\c productsapi;



create index styles_product_id on styles(product_id);

create index photo_style_id on photos(styles_id);

create index features_product_id on features(product_id);

create index skus_style_id on skus(styles_id);

create index related_product_id on related(product_id);