-- =============================================
-- DDL (Data Definition Language)
-- Database: GeoFavs
-- MySQL 8.0+
-- =============================================

-- VERIFICAR SI EXISTE LA DB GeoFavs
DROP DATABASE IF EXISTS GeoFavs;

-- CREAR UNA DB GeoFavs
CREATE DATABASE IF NOT EXISTS GeoFavs;
USE GeoFavs;

-- =============================================
-- Table: Users
-- =============================================
CREATE TABLE Users(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nickname VARCHAR( 35 ) NOT NULL UNIQUE,
    name VARCHAR( 35 ) NOT NULL,
    email VARCHAR( 50 ) NOT NULL UNIQUE,
    password VARCHAR( 255 ) NULL NULL

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE Locations(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    title VARCHAR( 35 ) NOT NULL,
    description VARCHAR( 180 ),
    latitude DECIMAL( 10, 8 ) NOT NULL,
    longitude DECIMAL( 11, 8 ) NOT NULL,
    coords POINT NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY( user_id ) REFERENCES Users( id )
);

CREATE TABLE MediaTypes(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    type VARCHAR( 15 ) NOT NULL UNIQUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE LocationMedia(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    media_type_id INT UNSIGNED NOT NULL,
    location_id INT UNSIGNED NOT NULL,
    content VARCHAR( 255 ),
    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY( media_type_id ) REFERENCES MediaTypes( id ),
    FOREIGN KEY( location_id ) REFERENCES Locations( id )
);
