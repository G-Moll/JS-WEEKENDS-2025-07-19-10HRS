// Standard Funcions ES5

// Function Declaration
function hello() {
    console.log( "Hello" );
}
// calling, running, executing, invoking, evaluating
hello()
var h = hello;
h();

// Parameters
function sayHello( msg ) {
    console.log( msg + " from JS" );
}
// Arguments
// sayHello( "Hello" );


// Return values
function holaMundo( hola ) {
    return hola + " desde JavaScript";
}
// var h = holaMundo( "Hola compañera Reishel" );
// console.log( h );

function holaMundoDos( hola ) {
    return {
        value: hola + " desde JavaScript",
        timestamp: new Date()
    };
}
// var b = holaMundoDos( "Gracias por los Camaruns..." );
// console.log( b.value );
// console.log( b[ "timestamp" ] );


// Function Expresion
var arrowOne = function() {
    console.log( 10 );
}
arrowOne();
