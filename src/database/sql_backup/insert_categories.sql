select * from categories;

INSERT INTO categories(category_name,main_category)
VALUES ('Perifericos', true),('Componentes de PC', true),
('Accesorios', true),('Conectividad', true),
('Consolas', true),('Gabinetes', true),
('Sillas Gamers', true);


-- Perifericos
INSERT INTO categories(category_name,parent_id)
VALUES ('Monitores', 1),('Mouses de PC', 1),
('Teclados', 1),('Auriculares', 1);

-- Componentes de PC
INSERT INTO categories(category_name,parent_id)
VALUES ('Placas de video', 2),('Motherboards', 2),
('Procesadores', 2),('Memoria Ram', 2), 
('Discos', 2),('Coolers y Ventiladores', 2),
('Fuentes de Alimentación', 2);