// IMPORT CUSTOM LIBRARIES
import { getCurrentPosition, formatLocationMessage } from './geolocation.js';
import { mapInit, mapUpdate } from './map.js';

// READ DOM OBJECTS
const map = mapInit( "map" );
const locateBtn = document.getElementById( "locateBtn" );
const statusText = document.getElementById( "statusText" );

// EVENT LISTENERS
locateBtn.addEventListener( "click", handleClickLocation );

// EVENT HANDLERS
async function handleClickLocation( e ) {
    locateBtn.disabled = true;

    try {
        const position = await getCurrentPosition();
        const { lat, lng, acc, txt } = formatLocationMessage( position );
        statusText.textContent = txt;
        mapUpdate( lat, lng );
        
        // console.log( position );
    }
    catch( e ) {
        let errorMessage = e.message;

        if( e.code === 1 ) errorMessage = "Permissions denied...📍❌";
        else if( e.code === 2 ) errorMessage = "Not found location 🗺️❌";
        else if( e.code === 3 ) errorMessage = "Timeout ⏰❌";

        console.log( errorMessage );
    }
    finally {
        locateBtn.disabled = false;
    }
}
