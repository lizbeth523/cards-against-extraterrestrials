CREATE DATABASE cards_db;
USE cards_db;

CREATE TABLE categories
(
	id INT AUTO_INCREMENT NOT NULL,
	category VARCHAR(250) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE responses
(
	id INT AUTO_INCREMENT NOT NULL,
	response VARCHAR(250) NOT NULL,
	PRIMARY KEY (id)
);