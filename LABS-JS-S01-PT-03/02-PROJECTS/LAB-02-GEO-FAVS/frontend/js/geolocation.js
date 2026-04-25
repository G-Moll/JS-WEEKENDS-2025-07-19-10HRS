export function getCurrentPosition( options = { enableHighAccuracy: true, timeout: 10000 } ) {
    
    // ES6 Promises
    return new Promise( ( resolve, reject ) =>  {
        if( ! navigator.geolocation ) {
            reject( new Error( "Geolocalizacion no soportada..." ) );
            return;
        }
        navigator.geolocation.getCurrentPosition( resolve, reject, options );
    });
}


export function formatLocationMessage( position ) {
    const { latitude, longitude, accuracy } = position.coords;

    return {
        lat: latitude,
        lng: longitude,
        acc: accuracy,
        txt: `📍 ${ latitude.toFixed( 5 ) }, ${ longitude.toFixed( 5 ) }, precission: (+-) ${ accuracy.toFixed( 0 ) }mts`
    };
}
