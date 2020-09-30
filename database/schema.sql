DROP DATABASE IF EXISTS geo_battle;
CREATE DATABASE geo_battle;

USE geo_battle;

CREATE TABLE battle
(ID INT PRIMARY KEY,
	NAME VARCHAR(100) DEFAULT '',
    LOCATION VARCHAR(100),
	PLAYERS VARCHAR(100),
	TOP_SCORE INT,
	WINNER VARCHAR(100)
    );
