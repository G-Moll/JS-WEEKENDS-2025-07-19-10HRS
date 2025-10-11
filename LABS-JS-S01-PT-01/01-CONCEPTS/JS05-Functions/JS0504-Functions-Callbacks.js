// Callback
function execute( numa, numb, cb ) {
    return cb( numa, numb );
}

function sum( a, b ) {
    return a + b;
}
function mul( a, b ) {
    return a * b;
}

console.log( execute( 10, 20, mul ) );
console.log( execute( 10, 20, sum ) );
console.log( execute( 10, 20, function( a, b ) { return a - b; } ) );
