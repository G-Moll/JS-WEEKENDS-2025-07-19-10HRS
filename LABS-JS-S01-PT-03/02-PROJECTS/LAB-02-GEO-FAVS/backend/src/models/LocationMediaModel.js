const { mysqlTable, int, varchar, timestamp } = require( "drizzle-orm/mysql-core" );
const { relations } = require( "drizzle-orm" );
const { Locations } = require( "./LocationModel" );

const LocationMedia = mysqlTable( "LocationMedia", {
    id: int( "id", { unsigned: true } ).primaryKey().autoincrement(),
    location_id: int( "location_id", { unsigned: true } ),

    created_at: timestamp( "created_at" ).defaultNow().notNull(),
    updated_at: timestamp( "updated_at" ).defaultNow().onUpdateNow().notNull()
} );

const LocationMediaRelations = relations( LocationMedia, ( { one, many } ) => ( {
    location: one( Locations, {
        fields: [ LocationMedia.location_id ],
        references: [ Locations.id ]
    } ),
    mediaTypes: many()
} ) );
