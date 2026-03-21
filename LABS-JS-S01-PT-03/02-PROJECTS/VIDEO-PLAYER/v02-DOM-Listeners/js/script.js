// DOM Elements
var videoElement = document.getElementsByTagName( "video" )[ 0 ];
var buttonFullscreen = document.getElementsByTagName( "span" )[ 0 ];
var buttonPip = document.getElementsByTagName( "span" )[ 1 ];
var buttonRandom = document.getElementsByTagName( "span" )[ 2 ];
var buttonAutoplay = document.getElementsByTagName( "span" )[ 3 ];
var watchedVideosList = document.getElementById( "watchedVideosList" );
var videosPlaylist = document.getElementById( "videosPlaylist" );
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
var autoplayList = false;
var videoPlayerIndex = undefined;

// videoElement.controls = !false;
// videoElement.autoplay = true;
// videoElement.loop = true;

// EventListers
document.addEventListener( "DOMContentLoaded", startUIHandler );
videoElement.addEventListener( "ended", endedVideoHandler );
buttonFullscreen.addEventListener( "click", fullscreenHandler );
buttonPip.addEventListener( "click", pipHandler );
buttonRandom.addEventListener("click", randomHandler);
buttonAutoplay.addEventListener( "click", autoplayHandler );


// Event Handlers
function startUIHandler( e ) {
    createPlaylist( videoList, videosPlaylist );
}

function createPlaylist( videosData, uiElement ) {
    var spansContent = "";

    for( var i = 0; i < videosData.length; i ++ ){
        spansContent +=
            `<span class="video-list"
                data-uri=${ videosData[ i ].uri }
                data-index=${ i }
                onclick="videoPlayHandler( event )">
                ${ videosData[ i ].title  }
            </span>`;
    }
    uiElement.innerHTML = spansContent;
}

function videoPlayHandler( e ) {
    var videoIndex = e.target.getAttribute( "data-index" );
    var videoChoice = videoList[ videoIndex ];
    updateVideoPlayer( videoChoice );

    videoPlayerIndex = parseInt( videoIndex );
}

function endedVideoHandler( e ) {
    console.log( e.type );

    if( currentVideoPlaying !== null ) {
        watchedVideosList.innerHTML += "<span class='video-played'>" + currentVideoPlaying.title + "</span>";
    }

    checkAutoplay( videoPlayerIndex );
}
function checkAutoplay( spandata ) {
    var videoChoice;
    console.log( autoplayList, videoPlayerIndex );
    
    if( autoplayList && videoPlayerIndex ) {
        videoPlayerIndex ++;
        videoChoice = videoList[ videoPlayerIndex ];
        updateVideoPlayer( videoChoice );
    }
    console.log( videoList[videoPlayerIndex + 1 ] );
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
    var videoChoice = randomVideo();
    updateVideoPlayer( videoChoice );;
}

function updateVideoPlayer( videoData ) {
    currentVideoPlaying = videoData;

    var currentUrl = "https://videos.pexels.com/video-files/" + currentVideoPlaying.uri;
    videoTitle.innerText = currentVideoPlaying.title;
    videoElement.src = currentUrl;
    videoElement.play();
    console.log( currentVideoPlaying );
}

function randomVideo() {
    var randomIndex = Math.floor( Math.random() * videoList.length );
    var randomVideo = videoList[ randomIndex ];
    return randomVideo;
}


function autoplayHandler( e ) {
    autoplayList = ! autoplayList;

    autoplayList ?
        buttonAutoplay.classList.add( "active" ) :
        buttonAutoplay.classList.remove( "active" );

    console.log( autoplayList );
}
