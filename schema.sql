DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;
--adding unique constraints , adding check to default price, adding check for sales price
--null or < default price

-- CREATE SCHEMA products;

  CREATE TABLE products (
    id integer primary key UNIQUE,
    campus varchar(100) not null,
    product_name varchar(100) not null,
    slogan varchar(50) not null,
    product_description varchar(400) not null,
    category varchar(100) not null,
    default_price varchar(50) not null,
  );
 -- add foreign keys
  CREATE TABLE styles (
    id integer primary key UNIQUE,
    product_id varchar(50) not null,
    style_name varchar(50) not null,
    original_price varchar(50) not null,
    sale_price varchar(50) CHECK(sale_price = null OR sale_price <= original_price),
    style_default boolean not null,
    foreign key (product_id) REFERENCES product(id)
  );

  create TABLE photos (
    id integer AUTO_INCREMENT primary key UNIQUE,
    styles_id integer not null,
    thumbnail_url varchar(100) not null,
    url varchar(100) not null,
    foreign key (styles_id) REFERENCES styles(id)
  );

  CREATE TABLE skus (
    id integer primary key UNIQUE,
    styles_id integer not null,
    quantity integer not null,
    size varchar(25) not null,
    foreign key (styles_id) REFERENCES styles(id)
  );

  CREATE TABLE related (
    id integer AUTO_INCREMENT primary key,
    product_id varchar(25) not null,
    related_id integer not null,
    foreign key (product_id) REFERENCES products(id)
  );

  CREATE TABLE feature (
    id integer AUTO_INCREMENT primary key,
    product_id varchar(25) not null,
    feature varchar(50) not null,
    feature_value varchar(50) not null,
    foreign key (product_id) REFERENCES products(id)
  )

  -- CREATE VIEW getProducts AS
  --   select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products;

  -- CREATE VIEW getProductbyId AS
  --   select id, campus, product_name, slogan, product_description, category, default_price, created_at, updated_at from products left join feature on product_id;

  -- CREATE VIEW getStyles AS
  --   select styles_id, style_name, original_price, sale_price, default_price from styles left join on product_id, styles_id;
