let slidUp = false;
let hidden = true;
let img_dark = true;

$( ".menu" ).click( function( e ){      
    if (slidUp){
        $( ".nav-list" ).slideDown();
        slidUp = false;
    } 
    else {
        $( ".nav-list" ).slideUp();
        slidUp = true;
    }
});

$( ".fa-palette" ).click( function( e ){
    // find color using button id
    $( "body" ).toggleClass( "bright-body" );
    $( "nav" ).toggleClass( "bright-nav" );
    $( ".nav-list" ).toggleClass( "bright-nav-list" );
    $( ".study-room" ).toggleClass( "bright-div" );
    $( ".timer-slot" ).toggleClass( "bright-timer" );
    $( ".startButton" ).toggleClass( "bright-button" );
    $( "article" ).toggleClass( "bright-article" );
    if (img_dark){
        img_dark = false;
        $( ".study-img" ).attr( "src", "images/BrightStudyRoom.jpeg" );
        $( ".study-audio" ).attr( "src", "audio/what_even_is_genre.m4a" );
        document.getElementById("timer").style.borderColor = "rgb(201, 123, 102)";
        document.getElementById("timer").style.backgroundColor = "rgb(42, 45, 34)";
        
    }
    else {
        $( ".study-img" ).attr( "src", "images/DarkStudyRoom.jpg" );
        img_dark = true;
        $( ".study-audio" ).attr( "src", "audio/OSB_Vid_Music.m4a" );
        document.getElementById("timer").style.borderColor = "rgb(73, 45, 50)";
        document.getElementById("timer").style.backgroundColor = "rgb(83, 89, 67)";
    }

    

});


