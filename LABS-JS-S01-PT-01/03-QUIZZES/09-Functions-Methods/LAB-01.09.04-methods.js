/*
04 ¿Cómo se define un método en un objeto?
    - a. Utilizando la palabra clave "procedure"
    - b. Utilizando la palabra clave "class"
    - c. Utilizando la palabra clave "function" (*)
    - d. Utilizando la palabra clave "method
*/

var m = {
    x: function a( message ) {
        console.log( message );
    },
    y: ( message ) => {
        console.log( message );
    }
}

m.x( "Hello" );
m.y( "See you" );



