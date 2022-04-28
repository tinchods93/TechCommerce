select * from products;
select * from brands;
select * from categories;
TRUNCATE TABLE products CASCADE;

-- Teclados
INSERT INTO products(product_name,unit_price, discount, brand_id, stock,category_id)
VALUES ('Teclado bluetooth Logitech Master Series MX Keys QWERTY español color grafito con luz blanca',12999,0,2,10,10),
('Teclado gamer Redragon Kumara K552 QWERTY Outemu Blue español latinoamérica color negro con luz RGB',6499,0,11,10,10);

-- Procesadores
INSERT INTO products(product_name,unit_price, discount, brand_id, stock,category_id)
VALUES ('Procesador gamer Intel Core i9-10900 BX8070110900 de 10 núcleos y 5.2GHz de frecuencia con gráfica integrada',86999,0,5,10,14),
('Procesador gamer Intel Core i9-10900F BX8070110900F de 10 núcleos y 5.2GHz de frecuencia',74999,0,5,10,14),
('Procesador gamer AMD Ryzen 5 3600 100-100000031BOX de 6 núcleos y 4.2GHz de frecuencia',38399,0,6,10,14);

-- Placas de video
INSERT INTO products(product_name,unit_price, discount, brand_id, stock,category_id)
VALUES ('Placa de video Nvidia Colorful Colorful Series GeForce 10 Series GTX 1050 Ti GTX1050TI NE 4G-V 4GB',48999,0,7,10,12),
('AMD Afox Radeon RX 500 Series RX 580 AFRX580-8192D5H2-V2 8GB',102999,0,6,10,12);

-- Motherboards
INSERT INTO products(product_name,unit_price, discount, brand_id, stock,category_id)
VALUES ('Motherboard Z390-p Asus Prime Pwf-led Gsi Wifi Minería',48999,0,8,10,13),
('Motherboard Gigabyte B450m Ds3h Wifi Amd Am4 Ryzen Ddr4',102999,0,13,10,13);

select * from categories where id = 13;

-- unir brand_name
SELECT prod.product_name,prod.unit_price, prod.discount, prod.stock,cat.category_name, brands.brand_name
FROM products prod
JOIN categories cat ON prod.category_id = cat.id
JOIN brands ON prod.brand_id = brands.id;

-- traer todas las brands por categoria
SELECT DISTINCT products.brand_id, brands.brand_name from products
JOIN brands ON products.brand_id = brands.id
where category_id = 13;

SELECT * from products
where category_id = 13;


UPDATE products
set sells = 1
where id = 10;

UPDATE products
set discount= 20
where id in('10','13','18','14');
