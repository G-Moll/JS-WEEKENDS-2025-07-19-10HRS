// CHECK IF DEVICE HAS ACCESS TO GEOLOCATION API
// options object setup minimal requierements for geolocation api
//      enableHighAccuracy: to activate the GPS sensor if available
//      timeout: to setup the awating time
export function getCurrentPosition( options = { enableHighAccuracy: true, timeout: 10000 } ) {

    // A Promise is a task that may fail or not (resolved or rejected)
    return new Promise( ( resolve, reject ) =>  {

        // If GEOLOCATION API IS NOT available, the task is rejected (reject function)
        if( ! navigator.geolocation ) {
            reject( new Error( "Geolocation not supported..." ) );
            return;
        }
        // As defatult task, geolocation getCurrentPosition is executed
        navigator.geolocation.getCurrentPosition( resolve, reject, options );
    });
} 


// TASK TO FORMAT COORDS DATA
// The functions spects a position object
export function formatLocationMessage( position ) {

    // The position.coords object is destructured on several variables
    const { latitude, longitude, accuracy } = position.coords;

    // An object is returned with 4 properties: lat, lng, acc, txt
    return {
        lat: latitude,
        lng: longitude,
        acc: accuracy,
        txt: `📍 🗺 ${ latitude.toFixed( 5 ) }, ${ longitude.toFixed( 5 ) }, precisión: (+-) ${ accuracy.toFixed( 0 ) }mts`
    };
}
