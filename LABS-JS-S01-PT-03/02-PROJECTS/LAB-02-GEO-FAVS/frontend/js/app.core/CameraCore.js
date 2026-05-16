import { CameraManager  } from "../camera/CameraManager.js";

class CameraCore {

    static camera = null;

    constructor() {}

    static init() {
        this.camera = new CameraManager( "cameraPreview" );

        document.getElementById( "startCam" ).addEventListener( "click", CameraCore.startCamHandler );
        document.getElementById( "stopCam" ).addEventListener( "click", CameraCore.stopCamHandler );
    }

    static startCamHandler( e ) {
        console.log( this );
        CameraCore.camera.start();
    }

    static stopCamHandler( e ) {
        console.log( this );
        CameraCore.camera.stop();
    }

}

export { CameraCore };
