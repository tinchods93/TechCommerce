select * from brands;

INSERT INTO brands(brand_name)
VALUES ('HP'),('LOGITECH'),('DELL'),
('HYPERX'),('INTEL'),('AMD'),('NVIDIA'),
('ASUS'),('KINGSTON'), ('MSI'), ('RAZER'), 
('CORSAIR'), ('GIGABYTE'), ('COOLER MASTER'), 
('THERMALTAKE'),('SAMSUNG');


UPDATE brands
SET brand_name = 'INTEL'
where id = 5;