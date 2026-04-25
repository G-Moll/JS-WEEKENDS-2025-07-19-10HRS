import { getCurrentPosition, formatLocationMessage } from './geolocation.js';
import { initMap, updateMapLocation } from './map.js';

const map = initMap( "map" );
const locateBtn = document.getElementById( "locateBtn" );
const statusText = document.getElementById( "statusText" );

locateBtn.addEventListener( "click", handleClickLocation );

async function handleClickLocation( e ) {
    locateBtn.disabled = true;

    try {
        const position = await getCurrentPosition();
        const { lat, lng, acc, txt } = formatLocationMessage( position );
        statusText.textContent = txt;
        updateMapLocation( lat, lng );
        
        // console.log( position );
    }
    catch( e ) {
        let errorMessage = e.message;

        if( e.code === 1 ) errorMessage = "Denied permissions...📍❌";
        else if( e.code === 2 ) errorMessage = "Not found location 🗺️❌";
        else if( e.code === 3 ) errorMessage = "Timeout ⏰";

        console.log( errorMessage );
    }
    finally {
        locateBtn.disabled = false;
    }
}
