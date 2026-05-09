// IMPORT CUSTOM LIBRARIES
import { MapCore } from "./app.core/MapCore.js";
import { CameraCore } from "./app.core/CameraCore.js";

document.addEventListener( "DOMContentLoaded", domContentLoadedHandler );

function domContentLoadedHandler( e ) {
    MapCore.init();
    CameraCore.init();
}
