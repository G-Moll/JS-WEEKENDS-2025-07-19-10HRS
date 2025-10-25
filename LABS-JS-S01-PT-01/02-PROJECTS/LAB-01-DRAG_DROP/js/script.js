var contarinerParent = document.body;

// Event-Delegation for dragstart, dragend ( .box )
contarinerParent.addEventListener( "dragstart", dragStartHandler );
contarinerParent.addEventListener( "dragend", dragEndHandler );

// Event-Delegation for dragover, dragleave, drop ( .container )
contarinerParent.addEventListener( "dragover", dragOverHandler );
contarinerParent.addEventListener( "dragleave", dragLeaveHandler );
contarinerParent.addEventListener( "drop", dropHandler );

function dragStartHandler( e ) {
    if( e.target.classList.contains( "box" ) ) {

        console.log( e.target.id );
    }
}
function dragEndHandler( e ) {
    console.log( e.type );
}
function dragOverHandler( e ) {
    console.log( e.type );
}
function dragLeaveHandler( e ) {
    console.log( e.type );
}
function dropHandler( e ) {
    console.log( e.type );
}

console.log( contarinerParent );

