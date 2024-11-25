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

INSERT INTO products VALUES (DEFAULT, 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77028267_99.jpg?imwidth=960&imdensity=1&ts=1727267641176', 'TOP', 'Top lúrex hombros descubiertos', 1, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77010360_01-99999999_01.jpg?imwidth=960&imdensity=1&ts=1723637130379', 'JEANS', 'Jeans Sienna flare crop', 2, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77059407_99-99999999_01.jpg?imwidth=960&imdensity=1&ts=1728302665712', 'VESTIDO', 'Vestido lúrex palabra honor', 3, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77019069_05-99999999_01.jpg?imwidth=960&imdensity=1&ts=1729154068807', 'SWEATER', 'Jersey cebra cuello redondo', 4, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES (DEFAULT, 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77083266_50-99999999_01.jpg?imwidth=960&imdensity=1&ts=1721739858538', 'PIJAMA', 'Camisa pijama terminaciones contraste', 5, DEFAULT, DEFAULT, DEFAULT);
