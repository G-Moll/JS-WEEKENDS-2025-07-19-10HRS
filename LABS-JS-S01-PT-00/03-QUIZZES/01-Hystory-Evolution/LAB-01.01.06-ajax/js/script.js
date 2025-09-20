/*
06  ¿Qué técnica se popularizó en 2005 para cargar contenido dinámicamente en páginas web?
    - a. HTML5
    - b. JSON
    - c. AJAX (*)
    - d. XML

    HTTP
        Verbos/Métodos
        GET
        POST

        DELETE
        PUT
        PATCH

    Sync
    Client Request1 ->  Server
    Server Response1 -> Client

    Client Request2 ->  Server
    Server Response2 -> Client


    Async
    Client Request1 ->  Server
    Client Request2 ->  Server
    Client Request3 ->  Server

    Server Response1 -> Client
*/

var container = document.getElementsByTagName( "div" )[ 0 ];

var xhr = new XMLHttpRequest();
xhr.open( "get", "http://localhost:3000/data/ajax-article.txt", true );

xhr.addEventListener( "loadend", loadendHandler );

xhr.send();

function loadendHandler( e ) {
    container.innerHTML = xhr.responseText;
}



