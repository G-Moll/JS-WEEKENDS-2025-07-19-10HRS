// IMPORT CUSTOM LIBRARIES
import { MapCore } from "./app.core/MapCore.js";
import { CameraCore } from "./app.core/CameraCore.js";
import { UICore } from "./app.core/UICore.js";

document.addEventListener( "DOMContentLoaded", domContentLoadedHandler );

function domContentLoadedHandler( e ) {
    MapCore.init();
    CameraCore.init();
    UICore.init();
}
