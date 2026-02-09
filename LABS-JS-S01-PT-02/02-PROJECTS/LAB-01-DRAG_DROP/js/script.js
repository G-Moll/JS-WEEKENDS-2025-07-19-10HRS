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
        e.dataTransfer.setData( "targetId", e.target.id );
        e.target.style.opacity = "0.3";

        // console.log( e.target.id );
    }
}
function dragEndHandler( e ) {
    if( e.target.classList.contains( "box" ) ) {
        e.target.style.opacity = "1";
    }

    // console.log( e.type );
}
function dragOverHandler( e ) {
    if( e.target.classList.contains( "container" ) ) {
        e.preventDefault();
    }

    // console.log( e.type );
}
function dragLeaveHandler( e ) {
    if( e.target.classList.contains( "container" ) ) {
        // e.preventDefault();
    }
    // console.log( e.type );
}
function dropHandler( e ) {
    var targetId = e.dataTransfer.getData( "targetId" );

    if( e.target.classList.contains( "container" ) ) {
        e.preventDefault();

        if( targetId ) {
            e.target.appendChild( document.getElementById( targetId ) );
        }

        console.log( targetId );
    }


    // console.log( e.type );
}

// console.log( contarinerParent );

