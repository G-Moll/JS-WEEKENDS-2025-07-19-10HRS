// Literal Object
var personOne = {
    name: "Joshua",
    sayHello: function() { console.log( "Hello..!" ) }
};
console.log( personOne.name );

personOne.sayHello();

// Instance Object
var personTwo = new Object();
personTwo.name = "Paul";
personTwo.sayHello = function() { console.log( "Hello!!!" ) }
console.log( personTwo.name );
personTwo.sayHello();

