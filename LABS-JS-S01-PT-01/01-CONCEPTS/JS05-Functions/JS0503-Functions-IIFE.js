// IIFE: Inmediate Invoked Function Expression
var innerScope = (function( num ) {
    console.log( num );
    return {
        name: "Joshua",
        age: num,
        sayHello: function() {
            console.log( "Hello..!" );
        }
    }
}( 1000 ));

console.log( innerScope );

// Reveal Module
// Modules

// Private      scope
// Public       

// Protected
// Sealed
// Internal
