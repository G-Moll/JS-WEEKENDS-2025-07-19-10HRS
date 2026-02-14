// DOM Elements
var videoElement = document.getElementsByTagName( "video" )[ 0 ];
var buttonFullscreen = document.getElementsByTagName( "span" )[ 0 ];
var buttonPip = document.getElementsByTagName( "span" )[ 1 ];
var buttonRandom = document.getElementsByTagName( "span" )[ 2 ];
var watchedVideosList = document.getElementById( "watchedVideosList" );
var videoTitle = document.querySelector( "#videoTitle" );

// Objects
var videoList = [
    // url: uniform resorce locator
    //     localhost:3000/users/   POST
    //     localhost:3000/users/   GET
    // uri: unique remote identifier
    //     https://www.somesite/5889619/5889619-uhd_2560_1440_25fps.mp4
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
var currentVideoPlaying = null;

// videoElement.controls = !false;
// videoElement.autoplay = true;
// videoElement.loop = true;

// EventListers
videoElement.addEventListener( "ended", endedVideoHandler );
buttonFullscreen.addEventListener( "click", fullscreenHandler );
buttonPip.addEventListener( "click", pipHandler );
buttonRandom.addEventListener( "click", randomHandler );

// Event Handlers
function endedVideoHandler( e ) {
    console.log( e.type );

    if( currentVideoPlaying !== null ) {
        watchedVideosList.innerHTML += "<span class='video-played'>" + currentVideoPlaying.title + "</span>";
    }

}


function fullscreenHandler( e ) {
    console.log( e.type, "Fullscreen" );
    videoElement.requestFullscreen();    
}

function pipHandler( e ) {
    console.log( e.type, "PiP" );
    videoElement.requestPictureInPicture();
}

function randomHandler( e ) {
    // Handles the click button
    updateVideoPlayer();
    
    // console.log( e.type, "randomHandler" );
}

function updateVideoPlayer() {
    var currentVideoData = randomVideo();
    currentVideoPlaying = currentVideoData;

    var currentUrl = "https://videos.pexels.com/video-files/" + currentVideoData.uri;
    videoElement.src = currentUrl;
    videoTitle.innerText = currentVideoData.title;
    console.log( currentVideoPlaying );
}

function randomVideo() {
    var randomIndex = Math.floor( Math.random() * videoList.length );
    var randomVideo = videoList[ randomIndex ];
    return randomVideo;

}
