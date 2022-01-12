CREATE SCHEMA products;

  CREATE TABLE products (
    id integer primary key,
    campus varchar(100) not null,
    product_name varchar(100) not null,
    slogan varchar(50) not null,
    product_description varchar(400) not null,
    category varchar(100) not null,
    default_price varchar(50) not null,
    created_at varchar(50) not null,
    updated_at varchar(50) not null
  );

  CREATE TABLE styles (
    id integer primary key,
    product_id varchar(50) not null,
    style_name varchar(50) not null,
    original_price varchar(50) not null,
    sale_price varchar(50),
    style_default boolean not null
  );

  create TABLE photos (
    id integer AUTO_INCREMENT primary key,
    styles_id integer not null,
    thumbnail_url varchar(100) not null,
    url varchar(100) not null,
    product_id
  );

  CREATE TABLE skus (
    id integer primary key,
    styles_id integer not null,
    quantity integer not null,
    size varchar(25) not null
  );

  CREATE TABLE related (
    id integer AUTO_INCREMENT primary key,
    product_id varchar(25) not null,
    related_id integer not null
  );

  CREATE TABLE feature (
    id integer AUTO_INCREMENT primary key,
    feature varchar(50) not null,
    feature_value varchar(50) not null
  )

  CREATE VIEW getProducts AS
    select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products;

  CREATE VIEW getProductbyId AS
    select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products left join feature on product_id;

  CREATE VIEW getStyles AS
    select styles_id, style_name, original_price, sale_price, default_price from styles left join on product_id, styles_id;
