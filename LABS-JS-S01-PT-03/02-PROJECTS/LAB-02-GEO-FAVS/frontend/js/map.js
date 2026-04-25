let mapInstance = null;
let markerInstance = null;


export function initMap(containerId = "map", defaultCoords = [19.4245515, -99.1655301], defaultZoom = 15 ) {
    mapInstance = L
        .map( containerId )
        .setView( defaultCoords, defaultZoom );
    L.tileLayer( 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' )
        .addTo( mapInstance );

    return mapInstance;
}

export function updateMapLocation() {

}
