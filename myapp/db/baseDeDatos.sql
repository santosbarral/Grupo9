/* Llenar con la base de datos de sql*/
CREATE SCHEMA Basededatosgrupo9;

USE Basededatosgrupo9;

CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT UNIQUE,
name VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productImg VARCHAR(250) NOT NULL,
productName VARCHAR(250) NOT NULL,
productDescription VARCHAR(600) NOT NULL,
userId INT(10) UNSIGNED DEFAULT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users VALUES (DEFAULT, 'Santos', 'santos@gmail.com', '12345', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, 'Martina', 'martina@gmail.com', 'abcd', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, 'Agustina', 'agustina@gmail.com', 'hola', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, 'Juan', 'juan@gmail.com', 'chau', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, 'Luis', 'luis@gmail.com', 'casa', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://acdn.mitiendanube.com/stores/001/188/678/products/remera-manga-corta-mujer-con-tajos-en-laterales-remera-olivia-cali-blanca-tienda-online-yage-sportswear-_1-11e74f39732aa78f3716954076639729-480-0.jpg', 'Remera', 'Remera blanca rayada', 1, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://kremiamoda.com/wp-content/uploads/2024/07/Pantalon-de-mujer-24614-2.jpg', 'Pantalon', 'Pantalon cargo gris', 2, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://yagmour.vtexassets.com/arquivos/ids/295555/SWEATER-CALADO-PERAL-MARFIL-0800311136-01.jpg?v=638597106038970000', 'Sweater', 'Sweater con agujeros', 3, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://acdn.mitiendanube.com/stores/003/962/317/products/23082023-img_7597-a84398e9a30ae2a33417059339869310-1024-1024.jpg', 'Zapatillas', 'Zapatillas negras', 4, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://www.atributo.co/cdn/shop/files/232.png?crop=center&height=600&v=1693517212&width=480', 'Vestido', 'Vestido azul', 5, DEFAULT, DEFAULT, DEFAULT);
