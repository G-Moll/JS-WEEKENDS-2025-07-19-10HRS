DROP DATABASE IF EXISTS GeoFavs;

CREATE DATABASE IF NOT EXISTS GeoFavs
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE GeoFavs;

CREATE TABLE Roles (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR( 25 ) NOT NULL UNIQUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE TABLE Users (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_id INT UNSIGNED,
    nickname VARCHAR( 25 ) NOT NULL,
    name VARCHAR( 100 ) NOT NULL,
    email VARCHAR( 255 ) NOT NULL UNIQUE,
    password VARCHAR( 255 ) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_users_nickname ( nickname ),
    INDEX idx_users_name ( name ),
    INDEX idx_users_role_id ( role_id ),
    INDEX idx_users_email ( email ),

    FOREIGN KEY( role_id ) REFERENCES Roles(id)

) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE TABLE Locations (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT UNSIGNED,
    title VARCHAR( 35 ) NOT NULL,
    description VARCHAR( 180 ) NOT NULL,
    coords POINT NOT NULL,
    favorite BOOLEAN NOT NULL DEFAULT FALSE,
    rating TINYINT UNSIGNED NOT NULL DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_locations_user_id ( user_id ),
    INDEX idx_locations_title ( title ),
    INDEX idx_locations_description ( description ),
    INDEX idx_locations_favorite ( favorite ),

    FOREIGN KEY ( user_id ) REFERENCES users (id)
) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE MediaTypes (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    type VARCHAR( 15 ) NOT NULL UNIQUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE TABLE LocationMedia (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    media_type_id INT UNSIGNED NOT NULL,
    location_id INT UNSIGNED NOT NULL,
    content VARCHAR( 255 ),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_locationmedia_media_type_id ( media_type_id ),
    INDEX idx_locationmedia_location_id ( location_id ),
    INDEX idx_locationmedia_content ( content )

) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


SHOW TABLES;
