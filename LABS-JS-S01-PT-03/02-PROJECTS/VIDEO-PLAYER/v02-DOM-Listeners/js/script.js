// DOM Elements
var videoElement = document.getElementsByTagName( "video" )[ 0 ];
var buttonFullscreen = document.getElementsByTagName( "span" )[ 0 ];
var buttonPip = document.getElementsByTagName( "span" )[ 1 ];
var buttonRandom = document.getElementsByTagName( "span" )[ 2 ];
var watchedVideosList = document.getElementById( "watchedVideosList" );
var videoTitle = document.querySelector( "#videoTitle" );

// Objects
var videoList = [
    { title: "Gift Box",            uri: "5889619/5889619-uhd_2560_1440_25fps.mp4" },
    { title: "Festival Production", uri: "2890236/2890236-hd_1920_1080_30fps.mp4" },
    { title: "Earth",               uri: "5921369/5921369-hd_1920_1080_30fps.mp4" },
    { title: "Cat Shower",          uri: "855029/855029-hd_1920_1080_30fps.mp4" },
    { title: "Traffic City",        uri: "2053100/2053100-uhd_2560_1440_30fps.mp4" },
    { title: "Neon Fractal",        uri: "856996/856996-hd_1920_1080_24fps.mp4" },
    { title: "Fish Bank",           uri: "1151329/1151329-hd_1920_1080_30fps.mp4" },
    { title: "Aero City Lights",    uri: "34682750/14700210_2560_1440_30fps.mp4" },
    { title: "City Lights",         uri: "2432404/2432404-hd_1920_1080_24fps.mp4" },
    { title: "Abstract Leaves",     uri: "13294237/13294237-hd_1920_1080_25fps.mp4" }
];

// videoElement.src = "https://videos.pexels.com/video-files/1723017/1723017-uhd_2560_1440_25fps.mp4";
// videoElement.controls = !false;
// videoElement.autoplay = true;
// videoElement.loop = true;

// EventListers
buttonFullscreen.addEventListener( "click", fullscreenHandler );
buttonPip.addEventListener( "click", pipHandler );
buttonRandom.addEventListener( "click", randomHandler );

// Event Handlers
function fullscreenHandler( e ) {
    console.log( e.type, "Fullscreen" );
    videoElement.requestFullscreen();    
}

function pipHandler( e ) {
    console.log( e.type, "PiP" );
    videoElement.requestPictureInPicture();
}

function randomHandler( e ) {
    // * 10; 0 - 0 , 0.5  5   1 10
    var randomIndex = Math.floor( Math.random() * videoList.length );
    videoElement.src = "https://videos.pexels.com/video-files/" + videoList[ randomIndex ].uri;
    console.log( randomIndex, videoList[ randomIndex ] );
    // console.log( e.type, "randomHandler" );
}




// console.log( videoElement );
