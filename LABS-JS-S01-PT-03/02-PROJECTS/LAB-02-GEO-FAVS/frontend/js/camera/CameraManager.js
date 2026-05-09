class CameraManager {
    constructor( videoElementId ) {
        this.videoElement = document.getElementById( videoElementId );
        this.stream = null;
        this.isActive = false;
    }

    async start() {
        try {
            if( ! navigator.mediaDevices || ! navigator.mediaDevices.getUserMedia ) throw new Error( "El dispositivo no soporta la cámara..." );

            const constraints = {
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: "environment"
                },
                audio: false
            };

            this.stream = await navigator.mediaDevices.getUserMedia( constraints );
            this.videoElement.srcObject = this.stream;
            this.videoElement.onloadedmetadata = () => {
                this.videoElement.play();
                this.isActive = true;
                console.log( "Camara corriendo...." );
            }
            return true;
        }
        catch( e ) {
            console.log( "Error al acceder a la camara", e );
            this.describeError( e );
            return false;
        }
        finally {}
    }

    stop() {}

    describeError() {}

    displayError() {}

}

export { CameraManager };
