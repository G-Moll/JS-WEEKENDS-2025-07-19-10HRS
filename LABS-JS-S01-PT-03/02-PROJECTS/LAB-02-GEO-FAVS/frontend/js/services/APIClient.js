class ApiClient {
    constructor( baseUrl = "" ) {
        this.baseUrl = baseUrl;
        this.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        this.defaultOptions = {
            method: "GET",
            headers: this.headers,
            mode: "cors",
            cache: "no-cache"
        };
    }

    setHeader( key, value ) {
        this.headers[ key ] = value;
        return this;
    }

    setHeaders( headers ) {
        Object.assign( this.headers, headers );
        return this;
    }

    async get( endpoint ) {
        return this.request( endpoint, { method: "GET" } );
    }

    async post( endpoint, payload = null ) {
        return this.request( endpoint, {
            method: "POST",
            body: payload ? JSON.stringify( payload ) : null
        });
    }

    async put( endpoint, payload = null ) {
        return this.request( endpoint, {
            method: "PUT",
            body: payload ? JSON.stringify( payload ) : null
        });
    }

    async patch( endpoint, payload = null ) {
        return this.request( endpoint, {
            method: "PATCH",
            body: payload ? JSON.stringify( payload ) : null
        });
    }

    async delete( endpoint ) {
        return this.request( endpoint, { method: "DELETE" } );
    }

    async request( endpoint, customOptions = {} ) {
        const url = `${ this.baseUrl }${ endpoint }`;
        const options = {
            ...this.defaultOptions,
            ...customOptions,
            headers: {
                ...this.headers,
                ...( customOptions.headers || {} )
            }
        };

        try {
            const response = await fetch( url, options );

            if( ! response.ok ) {
                const errorMessage = await this.getErrorMessage( response );
                throw new Error( errorMessage );
            }

            const data = await response.json();

            console.log( `✅ Petición ${ options.method } a ${ endpoint } exitosa` );

            return data;
        }
        catch( e ) {
            console.error( `❌ Error en petición ${ options.method } a ${ endpoint }:`, e.message );
            throw e;
        }
    }

    async getErrorMessage( response ) {
        try {
            const errorData = await response.json();
            return errorData.message || `Error ${ response.status }: ${ response.statusText }`;
        }
        catch( e ) {
            return `Error ${ response.status }: ${ response.statusText }`;
        }
    }
}

export default ApiClient;
