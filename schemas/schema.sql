DROP DATABASE IF EXISTS productsAPI;
CREATE DATABASE productsAPI;

\c products;
--adding unique constraints , adding check to default price, adding check for sales price
--null or < default price

-- CREATE SCHEMA products;

  CREATE TABLE products (
    id integer primary key UNIQUE,
    product_name varchar(100) not null,
    slogan varchar(200) not null,
    product_description varchar(800) not null,
    category varchar(100) not null,
    default_price varchar(50) not null
  );

  copy products(id, product_name, slogan, product_description, category, default_price) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/product.csv' delimiter ',' csv header;

 -- add foreign keys
  CREATE TABLE styles (
    id integer primary key UNIQUE,
    product_id integer not null,
    style_name varchar(50) not null,
    sale_price varchar(50) CHECK(sale_price = null OR sale_price <= original_price),
    original_price varchar(50) not null,
    style_default boolean not null,
    foreign key (product_id) REFERENCES products(id)
  );

  copy styles(id, product_id, style_name, sale_price, original_price, style_default) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/styles.csv' delimiter ',' csv header;

  create TABLE photos (
    id integer primary key UNIQUE,
    styles_id integer not null,
    normal_url text not null,
    thumbnail_url text not null,
    foreign key (styles_id) REFERENCES styles(id)
  );

  copy photos(id, styles_id, normal_url, thumbnail_url) from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/photos.csv' delimiter ',' csv header;

--   COPY photos
-- FROM '/home/brian/hackreactor/Project-Catwalk-Products-API/data/photos.csv'
-- WITH (FORMAT CSV, HEADER true, NULL 'null');



  CREATE TABLE skus (
    id integer primary key UNIQUE,
    styles_id integer not null,
    size varchar(25) not null,
    quantity integer not null,
    foreign key (styles_id) REFERENCES styles(id)
  );

  copy skus from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/skus.csv' delimiter ',' csv header;

  CREATE TABLE related (
    id integer primary key,
    product_id integer not null,
    related_id integer not null,
    foreign key (product_id) REFERENCES products(id)
  );

  copy related from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/related.csv' delimiter ',' csv header;

  CREATE TABLE features (
    id integer primary key,
    product_id integer not null,
    feature varchar(50) not null,
    feature_value varchar(50) not null,
    foreign key (product_id) REFERENCES products(id)
  );

  copy features from '/home/brian/hackreactor/Project-Catwalk-Products-API/data/features.csv' delimiter ',' csv header;

  -- CREATE VIEW getProducts AS
  --   select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products;

  -- CREATE VIEW getProductbyId AS
  --   select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products left join feature on product_id;

  -- CREATE VIEW getStyles AS
  --   select styles_id, style_name, original_price, sale_price, default_price from styles left join on product_id, styles_id;
