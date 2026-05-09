import { Geolocation } from '../maps/Geolocation.js';
import { Geomap } from '../maps/Geomap.js';

class MapCore {
    constructor() {}

    static init() {
        // READ DOM OBJECTS
        const map = Geomap.mapInit( "map" );
        const locateBtn = document.getElementById( "locateBtn" );
        const statusText = document.getElementById( "statusText" );

        // EVENT LISTENERS
        locateBtn.addEventListener( "click", handleClickLocation );

        // EVENT HANDLERS
        async function handleClickLocation( e ) {
            locateBtn.disabled = true;

            try {
                const position = await Geolocation.getCurrentPosition();
                const { lat, lng, acc, txt } = Geolocation.formatMessage( position );
                statusText.textContent = txt;
                Geomap.mapUpdate( lat, lng );
                
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
        console.log( "MapCore Initialized..!" );
    }
}

export { MapCore };
