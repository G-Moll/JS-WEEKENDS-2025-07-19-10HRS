const { mysqlTable, int, varchar, timestamp } = require( "drizzle-orm/mysql-core" );
const { relations } = require( "drizzle-orm" );
const { Users } = require( "./UserModel" );

const Locations = mysqlTable( "Locations", {
    id: int( "id", { unsigned: true }  ).primaryKey().autoincrement(),
    user_id: int( "user_id", { unsigned: true } ),
    nickname: varchar( "nickname", { length: 100 } ).notNull().unique(),
    name: varchar( "name", { length: 100 } ).notNull(),
    email: varchar( "email", { length: 255 } ).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),

    created_at: timestamp( "created_at" ).defaultNow().notNull(),
    updated_at: timestamp( "updated_at" ).defaultNow().onUpdateNow().notNull()
} );

const LocationsRelations = relations( Locations, ( { one, many } ) => ( {
    user: one( Users, {
        fields: [ Locations.user_id ],
        references: [ Users.id ]
    } ),
    locationMedia: many( require( "./LocationMediaModel" ).LocationMedia )
} ) );

module.exports = { Locations, LocationsRelations };
