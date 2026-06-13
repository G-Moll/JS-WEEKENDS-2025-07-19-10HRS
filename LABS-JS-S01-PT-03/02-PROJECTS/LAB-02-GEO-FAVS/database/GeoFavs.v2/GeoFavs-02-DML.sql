USE GeoFavs;

-- Roles Table
INSERT INTO Roles( name )
    VALUES ( "Admim" );
INSERT INTO Roles( name )
    VALUES ( "Customer" );

-- Users Table
INSERT INTO Users( role_id, nickname, name, email, password )
    VALUES ( 1, "admin1", "Juan", "juan@juan.com", "$2a$12$ekeBedHvCOql6/4/RP4oA.7DNIxBtQe2XAwvaZCLB0W2hzgmsF8tK" );
INSERT INTO Users( role_id, nickname, name, email, password )
    VALUES ( 2, "Custum1", "pedro", "pedro@pedro.com", "$2a$12$SnwY0NFM07AIsALHMfFYGO0cypM9z5fCI9TrhlcV2i2WiKcAuTK5K" );
INSERT INTO Users( role_id, nickname, name, email, password )
    VALUES ( 2, "Custum2", "Jose", "Jose@Jose.com", "$2a$12$VCBZt.SmYeRNqhsLVB.23uMNH0xYLMhU1JnkoezzlXLS3jlnLQ7JC" );
INSERT INTO Users( role_id, nickname, name, email, password )
    VALUES ( 2, "Custum3", "Alan", "Alan@Alan.com", "$2a$12$bXKT01QVX9NGfTN0ANaivuim1bMMl4FiDj3qHQGHIIrFcDlOa/dSq" );

-- Locations Table
INSERT INTO Locations( user_id, title, description, coords )
    VALUES ( 2, "PilaresZR", "Pilares de escuela de codigo", POINT ( 19.4245539,-99.1653032 ) );
INSERT INTO Locations( user_id, title, description, coords )
    VALUES ( 2, "INFONAVIT IZTACALCO", "casa de la susodicha", POINT ( 19.384265,-99.1089771 ) );
INSERT INTO Locations( user_id, title, description, coords )
    VALUES ( 4, "PIMPS BAR", "Descanso de la escuela", POINT ( 19.424632,-99.1651727 ) );

-- LocationMedia Table
-- 1 2 3 4 
INSERT INTO MediaTypes( type ) VALUES ( "Note" );
INSERT INTO MediaTypes( type ) VALUES ( "Picture" );
INSERT INTO MediaTypes( type ) VALUES ( "Audio" );
INSERT INTO MediaTypes( type ) VALUES ( "Video" );


INSERT INTO LocationMedia( media_type_id, location_id, content )
    VALUES ( 1, 1, "Pilares Zona Rosa tiene talleres de EDC y otras actividades" );

INSERT INTO LocationMedia( media_type_id, location_id, content )
    VALUES ( 2, 2, "pilares-zr.jpg" );
INSERT INTO LocationMedia( media_type_id, location_id, content )
    VALUES ( 3, 2, "audio.mp3" );

INSERT INTO LocationMedia( media_type_id, location_id, content )
    VALUES ( 1, 3, "Nota para describir la ubicación" );
INSERT INTO LocationMedia( media_type_id, location_id, content )
    VALUES ( 4, 3, "video-nota-4.mp4" );




SELECT * FROM Roles;
SELECT * FROM Users;
SELECT * FROM Locations;
SELECT * FROM MediaTypes;
SELECT * FROM LocationMedia;
