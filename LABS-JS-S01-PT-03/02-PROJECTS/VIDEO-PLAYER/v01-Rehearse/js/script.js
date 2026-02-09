// DOM Elements
var videoUI = document.getElementsByTagName( "video" )[ 0 ];
var spanFullscreen = document.getElementsByTagName( "span" )[ 0 ];
var spanPip = document.getElementsByTagName( "span" )[ 1 ];

videoUI.src = "https://videos.pexels.com/video-files/1723017/1723017-uhd_2560_1440_25fps.mp4";
videoUI.controls = !false;
videoUI.autoplay = true;
videoUI.loop = true;

// Events
spanFullscreen.addEventListener( "click", fullscreenHandler )
spanPip.addEventListener( "click", pipHandler )

// Event Handlers
function fullscreenHandler( e ) {
    console.log( e.type, "Fullscreen" );
    videoUI.requestFullscreen();    
}

function pipHandler( e ) {
    console.log( e.type, "PiP" );
    videoUI.requestPictureInPicture();
}





// console.log( videoUI );
