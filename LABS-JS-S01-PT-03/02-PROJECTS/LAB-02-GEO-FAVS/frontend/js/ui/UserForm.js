class UserForm {

    constructor() {}

    static getFormData( [ ...userData ] ) {

        const [ roleId, nickname, name, email, password ] = userData;

        // console.log( roleId, nickname, name, email, password );

        const userPayload = {
            role_id: roleId,
            nickname: nickname,
            name: name,
            email: email,
            password: password
        };

        console.log( userPayload );

        return userPayload;
    }

    static async sendFormData( e, payloadData ) {
        e.preventDefault();
        console.log( "PAYLOADDATA", payloadData );
        // console.log( e );
        
        try {
            // console.log( payloadData );
            const jsonData = JSON.stringify( payloadData );
            console.log( "Payload JSON:", jsonData );
            // console.log( "Payload DATA:", payloadData );
            
            const endpointUrl = "http://localhost:8282/api/users";
            const response = await fetch( endpointUrl, {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    // "Authorization": "Bearer tu-token"
                },
                body: jsonData
            } );
            
            if( ! response.ok ) {
                // throw new Error( `Error HTTP: ${ response.status } - ${ response.statusText }` );
                console.log( response.status );
                console.log( response.statusText );
            }

            const data = await response.json();
            console.log( "Respuesta del servidor:", data );
            console.log( "¡Datos enviados correctamente!" );
        }
        catch( e ) {
            console.error( "Error al enviar los datos:", e );
            console.log( `Error: ${ e.message }` );
        }
    }
}

export { UserForm };
