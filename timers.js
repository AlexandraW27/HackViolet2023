/* Contains the methods running the timers used to study

Author: Rafael Dietsch
For Hackviolet 2023

*/

// Declare constants that are used to tell how long a timer should run for
const studyTime = 25;
const shortBreak = 5;
const longBreak = 15;

$( ".startButton" ).click( function ( e ){

    // Set the date we're counting down to
    let countDownDate = new Date().getTime() + (1000*60*1);
    timerSet = false;

    // Update the count down every 1 second
    let timer = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        updateTimer(minutes, seconds)
            
        // If the count down is over, write some text 
        if (distance < 0) {
            // play alarm
            // let alarm = new Audio( "audio/alarm.mp3");
            // alarm.play();
            // stop timer
            document.getElementById( "timer" ).innerText = "1:00";
        }
        }, 1000);
});

function updateTimer( minutes, seconds ) {
    let secondStr = seconds.toString().padStart(2, '0'); // format the seconds as two digits
    let timer = minutes + ":" + secondStr;
    document.getElementById( "timer" ).innerText = timer;
}

function startTime() {
    document.getElementById("timer").innerText = "0:59";
}