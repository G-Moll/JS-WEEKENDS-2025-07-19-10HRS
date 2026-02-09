function hello() {
    console.log( "Hello JS" );
}

function sayHello( name ) {
    console.log( "Hello " + name );
}

function getHello( name ) {
    var msg = "hello " + name;
    return msg;
}
var result = getHello( "Joshua" );
console.log( result );
