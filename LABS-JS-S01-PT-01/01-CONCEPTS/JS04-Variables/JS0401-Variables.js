// var hoisting
var classic = "Esto es una cadena";
console.log( classic, typeof classic );
var classic = 5;
console.log( classic, typeof classic );
var lmn;
lmn = true;
console.log( lmn, typeof lmn );

// let
let letVariable = "Esto es otra cadena";
console.log( letVariable, typeof letVariable );

// let letVariable = 5; // Error
letVariable = 5;
console.log( letVariable, typeof letVariable );

let someData;
someData = 10;
console.log( someData, typeof someData );

// const
const fixedNumber = 10;
console.log( fixedNumber, typeof fixedNumber )
// const fixedNumber = 10;  // Error
// fixedNumber = 11;        // Error
// const xyz;   // Error
// xyz = 20; 
// console.log( fixedNumber, typeof fixedNumber )
// 
const fixedValue = 10;
console.log( fixedValue, typeof fixedValue )
