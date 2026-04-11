import { getCurrentPosition } from './geolocation.js';
// import { x, y } from './map.js';

const locateBtn = document.getElementById( "locateBtn" );

locateBtn.addEventListener( "click", handleClickLocation );

async function handleClickLocation( e ) {
    locateBtn.disabled = true;

    try {
        const position = await getCurrentPosition();
        console.log( position );
        console.log( position.coords.accuracy );
        console.log( position.coords.latitude );
        console.log( position.coords.longitude );
    }
    catch( e ) {
        let errorMessage = e.message;

        if( e.code === 1 ) errorMessage = "Permiso denegado";
        else if ( e.code === 2 ) errorMessage = "Ubicacion no encontrada";
        else if ( e.code === 3 ) errorMessage = "Tiempo agotado";

        console.log( errorMessage );
    }
    finally {
        locateBtn.disabled = false;
    }

}
