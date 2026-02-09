/*
03 ¿Qué es el retorno de una función?
    - a. Un valor que se devuelve desde la función (*)
    - b. Un tipo de dato en la función
    - c. Un nombre de variable dentro de la función
    - d. Un valor que se pasa a la función
*/
function a( message ) {
    return message + " " + message + "..!";
}

var msg = a( "Hello" );
console.log( msg );
