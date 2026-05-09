class Geolocation {

    static getCurrentPosition( options = { enableHighAccuracy: true, timeout: 10000 } ) {

        return new Promise( ( resolve, reject ) =>  {

            if( ! navigator.geolocation ) {
                reject( new Error( "Geolocation not supported..." ) );
                return;
            }
            navigator.geolocation.getCurrentPosition( resolve, reject, options );
        });
    }


    static formatMessage( position ) {

        const { latitude, longitude, accuracy } = position.coords;

        return {
            lat: latitude,
            lng: longitude,
            acc: accuracy,
            txt: `📍 🗺 ${ latitude.toFixed( 5 ) }, ${ longitude.toFixed( 5 ) }, precisión: (+-) ${ accuracy.toFixed( 0 ) }mts`
        };
    }

}

export { Geolocation };
