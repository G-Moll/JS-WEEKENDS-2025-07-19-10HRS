// IMPORT CUSTOM LIBRARIES
import { MapCore } from "./app.core/MapCore.js";
import { CameraCore } from "./app.core/CameraCore.js";

document.addEventListener( "DOMContentLoaded", dclHandler );

function dclHandler( e ) {
    MapCore.init();
    CameraCore.init();
}
