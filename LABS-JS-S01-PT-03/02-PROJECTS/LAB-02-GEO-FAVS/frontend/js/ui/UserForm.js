class UserForm {

    constructor() {}

    static getFormData( userData ) {

        const [ roleId, nickname, name, email, password ] = userData;

        // console.log( userData );

        const userPayload = {
            role_id: roleId,
            nickname: nickname,
            name: name,
            email: email,
            password: password
        };

        // console.log( userPayload );

        return userPayload;
    }

    static async sendFormData( e, payloadData ) {
        e.preventDefault();
        
        try {
            const jsonData = JSON.stringify( payloadData );
            const endpointUrl = "http://localhost:8282/api/users";
            const response = await fetch( endpointUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer tu-token"
                },
                body: jsonData
            } );
            
            if( ! response.ok ) {
                throw new Error( `Error HTTP: ${ response.status } - ${ response.statusText }` );
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


    static async sendFormDataBis(e, payloadData) {
        e.preventDefault();
        
        console.log("📦 Payload a enviar:", payloadData);
        
        try {
            const response = await fetch("http://localhost:8282/api/users", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payloadData)
            });
            
            const text = await response.text();
            // console.log( "📨 Respuesta cruda:", text) ;
            
            try {
                const data = JSON.parse( text );
                // console.log( "📨 Datos parseados:", data );
            }
            catch(parseError) {
                // console.error( "❌ No es JSON válido:", parseError );
            }
            
        }
        catch(e) {
            console.error("❌ Error de red:", e);
        }
    }

}

export { UserForm };
