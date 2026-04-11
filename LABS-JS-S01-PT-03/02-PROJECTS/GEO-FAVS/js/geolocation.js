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
