// ES5

var officeFiles = {
    fileTypes: [
        // .doc .xls .ppt
        "application/msword",
        "application/vnd.ms-excel",
        "application/vnd.ms-powerpoint",

        // .docx .xlsx .pptx
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",

        // .docm .xlsm .pptm
        "application/vnd.ms-word.document.macroEnabled.12",
        "application/vnd.ms-excel.sheet.macroEnabled.12",
        "application/vnd.ms-powerpoint.presentation.macroEnabled.12",

        // .dot .xlt .pot
        // "application/msword",
        // "application/vnd.ms-excel",
        // "application/vnd.ms-powerpoint",
    ],
    displayNames: [ "Documento", "Libro", "Presentación" ],
    commonNames: [ "document", "book", "slide" ]
};

var fileInput = document.getElementById( "fileInput" );
var preview = document.getElementById( "preview" );

fileInput.addEventListener( "change", changeHandler );

function changeHandler( e ) {
    var files = e.target.files;
    var file = files[ 0 ];
    var fileReader = new FileReader();

    fileReader.addEventListener( "loadend", function( e ) {
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
    if( file.type.indexOf( "image/" ) >= 0 ) {
        preview.innerHTML += "<img src=" + e.target.result + ">";
    }
    else if( file.type.indexOf( "audio/" ) >= 0 ) {
        preview.innerHTML += "<audio controls src=" + e.target.result + "></audio>";        
    }
    else if( file.type.indexOf( "video/" ) >= 0 ) {
        preview.innerHTML += "<video controls src=" + e.target.result + "></video>";        
    }
    else if( file.type == "application/pdf" ) {
        preview.innerHTML += "<iframe src=" + e.target.result + "></iframe>";        
    }
    else if( officeFiles.fileTypes.indexOf( file.type ) >= 0 ) {
        var fileMatch = officeFiles.fileTypes.indexOf( file.type );
        var styleFactor = officeFiles.displayNames.length;
        var fileIndex = fileMatch % styleFactor;
        var fileStyle = officeFiles.commonNames[ fileIndex ];
        var displayName = officeFiles.displayNames[ fileIndex ];

        var fileUrl = URL.createObjectURL( file );

        preview.innerHTML +=
            "<div class='card-file " + fileStyle + "-card'>" +
                "<p class=" + fileStyle + "-text>" +
                    "<strong>" + displayName + " </strong>" +
                    "<span>" + file.name + "</span>" +
                "</p>" +
                "<a class=" + fileStyle + "-button" +
                    " href=" + fileUrl +
                    " download=" + file.name + ">Descargar</a>" +
            "</div>";
    }
    else if( file.type.indexOf( "text/" ) >= 0  ) {
        preview.innerHTML += "<pre><code>" + e.target.result + "</code></pre>";
    }
    // console.log( file.type );
}
