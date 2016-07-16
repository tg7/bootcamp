CREATE DATABASE topsongsDB;

USE topsongsDB;

CREATE TABLE 'topsongs' (
	'position' INT(10) NOT NULL,
	'artist' VARCHAR(30) NOT NULL,
	'song' VARCHAR(30) NOT NULL,
	'year' INT(4) NOT NULL, 
	'total' DECIMAL (3, 3) NOT NULL, 
    PRIMARY KEY ('position')
);

SELECT * from topsongs;
