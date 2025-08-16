var fileInput = document.getElementById( "fileInput" );
var preview = document.getElementById( "preview" );

// preview.onclick = function() {
//     console.log( "Hemos dado click en el preview" );
// }

preview.addEventListener( "click", clickHandler );

function clickHandler() {
    console.log( "Hemos dado click en el preview..." );    
}


console.log( fileInput );
console.log( preview );
