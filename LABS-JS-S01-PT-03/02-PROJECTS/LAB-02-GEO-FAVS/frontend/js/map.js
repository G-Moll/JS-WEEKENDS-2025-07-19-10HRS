// INITIAL VARIABLES FOR MAP AND MARKER
let mapInstance = null;
let markerInstance = null;

// FUNCTION FOR CREATING A MAP INSIDE THE DIV WITH ID "map"
//      data required: div id from DOM ( "map" )
//      array with latitude and longitude values (defaultCoords)
//      zoom level (defaultZoom) 
export function mapInit( mapContainer = "map", defaultCoords = [ 19.4245515, -99.1655301 ], defaultZoom = 15 ) {

    // L is an object from "leaflet.js" library
    mapInstance = L
        .map( mapContainer )
        .setView( defaultCoords, defaultZoom );

    // Default url where basemaps are taken
    //      s: servers; z: zoom; x, y: coords; r: render
    //      light_all: map theme; .png: image tiles map
    // map from leaflet is added to div on DOM ( div with id "map" ) 
    L
        .tileLayer( 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' )
        .addTo( mapInstance );

    //  Map created with tiles is returned
    return mapInstance;
}

export function mapUpdate() {
    console.log( "Testing mapUpdate" )
}
