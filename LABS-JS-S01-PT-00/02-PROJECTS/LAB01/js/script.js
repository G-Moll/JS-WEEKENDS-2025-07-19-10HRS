// ES5
var fileInput = document.getElementById( "fileInput" );
var preview = document.getElementById( "preview" );

fileInput.addEventListener( "change", changeHandler );

function changeHandler( e ) {
    var files = e.target.files;
    var file = files[ 0 ];
    var fileReader = new FileReader();

    fileReader.addEventListener( "loadend", function( e ) {
        console.log( e.type );
        console.log( e );
        
        handleFileRead( e, file );
    });

    if( file.type.indexOf( "text/" ) >= 0 ) {
        fileReader.readAsText( file );
    }
    else {
        fileReader.readAsDataURL( file );
    }
}

function handleFileRead( e, file ) {
    // ...
}
