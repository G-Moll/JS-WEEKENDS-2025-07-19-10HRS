class Geomap {

    static mapInstance = null;
    static markerInstance = null;

    static mapInit( mapContainer = "map", defaultCoords = [ 19.4245515, -99.1655301 ], defaultZoom = 15 ) {

        this.mapInstance = L
            .map( mapContainer )
            .setView( defaultCoords, defaultZoom );

        L
            .tileLayer( 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' )
            .addTo( this.mapInstance );

        return this.mapInstance;
    }

    static mapUpdate( lat, lng, zoom = 15, popMsg = "Hello Maps" ) {
        if( ! this.mapInstance ) throw new Error( "Mapa no inicializado..." );

        this.mapInstance.setView( [ lat, lng ], zoom );

        if( this.markerInstance ) {
            this.markerInstance.setLatLng( [ lat, lng ] );
        }
        else {
            this.markerInstance = L
                .marker( [ lat, lng ] )
                .addTo( this.mapInstance );
        }

        this.markerInstance
            .bindPopup( popMsg )
            .openPopup();

        return this.markerInstance;

        console.log( "Testing mapUpdate" );
    }

}

export { Geomap };
