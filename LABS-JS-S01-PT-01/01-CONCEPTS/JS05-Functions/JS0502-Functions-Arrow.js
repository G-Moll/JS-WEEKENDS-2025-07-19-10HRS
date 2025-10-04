// Arrow Function: ES6
var arrowTwo = () => {
    return 10;
};
var a = arrowTwo();
console.log( a );

var arrowThree = a => {
    console.log( a );
}
arrowThree( 37 );
