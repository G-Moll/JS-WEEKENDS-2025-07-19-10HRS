class CameraManager {
    constructor( videoElementId ) {
        this.videoElement = document.getElementById( videoElementId );
        this.stream = null;
        this.isActive = false;
    }

    loadedMetadataHandler( e ) {
        this.videoElement.play();
        this.isActive = true;
        console.log( "Camara corriendo...." );
        console.log( e );
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
            this.videoElement.addEventListener( "loadedmetadata", this.loadedMetadataHandler );
            return true;
        }
        catch( e ) {
            console.log( "Error al acceder a la camara", e );
            this.describeError( e );
            return false;
        }
        finally {}
    }

    stop() {
        if( this.stream ) {
            this.stream.getTracks().forEach( track => {
                track.stop();
            });
            this.stream = null;
            this.isActive = false;
            this.videoElement.srcObject = null;
            console.log( "Cámara detenida..." )
        }
    }

    describeError( error ) {
        let message = "";

        switch( error.name ) {
            case "NotAllowedError":
                message = "Permiso denegado. Por favor, permite el acceso a la cámara.";
                break;
            case "NotFoundError":
                message = "No se encontró ninguna cámara en este dispositivo.";
                break;
            case "NotReadableError":
                message = "La cámara está siendo utilizada por otra aplicación.";
                break;
            case "OverconstrainedError":
                message = "No se pudo cumplir con los requisitos solicitados para la cámara.";
                break;
            default:
                message = `Error al acceder a la cámara: ${ error.message }`;
        }

        this.displayError( message );
    }

    displayError( message ) {
        const errorDiv = document.getElementById( "errorCam" );
        if( errorDiv ) {
            errorDiv.textContent = message;
            errorDiv.style.display = "block";
        }
    }

}

export { CameraManager };
