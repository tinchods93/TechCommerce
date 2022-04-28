drop table users;
drop table categories;
drop table brands;
drop table roles;
drop table products;

DROP TABLE categories,
brands,
roles,
addresses,
phone_numbers,
users,
products,
favorites,
cart_items CASCADE;

select * from users;
select * from categories;
select * from addresses;
select * from phone_numbers;
select * from brands;
select * from roles;
select * from products;

-- Database: techcommerce

-- PREVIOUS CONFIG
SET TIMEZONE = 'America/Argentina/La_Rioja'
SHOW TIMEZONE;
SELECT CURRENT_TIMESTAMP;


CREATE TABLE categories(
	id SERIAL PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL,
    parent_id INT REFERENCES categories(categoryId),
    main_category BOOLEAN,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE brands(
	id SERIAL PRIMARY KEY,
    brand_name VARCHAR(100) NOT NULL,
    brand_image VARCHAR(500),
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE roles(
	id SERIAL PRIMARY KEY,
    role_name VARCHAR(30) NOT NULL,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE addresses(
	id SERIAL PRIMARY KEY,
	neighborhood VARCHAR (100),
	street VARCHAR (100),
	city VARCHAR (100) NOT NULL,
	province VARCHAR (100) NOT NULL,
	country VARCHAR (100) NOT NULL,
	zipcode VARCHAR(10) NOT NULL,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE phone_numbers(
	id SERIAL PRIMARY KEY,
	country_code VARCHAR(15) NOT NULL,
	area_code VARCHAR(15) NOT NULL,
	p_number VARCHAR(15) NOT NULL,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role_id INT REFERENCES roles(id),
    avatar_image VARCHAR(1000),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address_id INT REFERENCES addresses(id),
    phone_number INT REFERENCES phone_numbers(id),
    birthday DATE,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

ALTER TABLE addresses
ADD user_id INT references users(id);

ALTER TABLE phone_numbers
ADD user_id INT references users(id);

CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	product_name varchar(300) NOT NULL,
	unit_price numeric(11,2) default 0,
	final_price numeric(11,2) default 0,
	formated_price VARCHAR(20) default '0',
	discount numeric(5,2) default 0,
    brand_id INT references brands(id),
	stock int default 0,
	sells int default 0,
	description TEXT,
	image VARCHAR(500),
	category_id INT references categories(id),
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE favorites(
	id SERIAL PRIMARY KEY,
	product_id INTEGER REFERENCES products(id),
	user_id INTEGER REFERENCES users(id),
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);

CREATE TABLE cart_items(
	id SERIAL PRIMARY KEY,
	product_id INTEGER REFERENCES products(id),
	user_id INTEGER REFERENCES users(id),
	quantity INTEGER,
	created_at DATE default CURRENT_TIMESTAMP(0),
	modified_at DATE default CURRENT_TIMESTAMP(0)
);