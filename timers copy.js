/* Contains the methods running the timers used to study

Author: Rafael Dietsch
For Hackviolet 2023

*/

// Declare constants that are used to tell how long a timer should run for
const studyTime = 25;
const shortBreak = 5;
const longBreak = 15;

/**
 * @purpose Begins one pomodoro session, 25m study then 5m break
 * 
 * @return Digit when execution is terminated
 */
// function beginPomodoro() {
//     let Minutes = 25;
//     let Seconds = 0;
//     let timerDone = false;
//     let timer;
//     while (!timerDone) {
//         Seconds = setTimeout(updateSeconds(Seconds), 1000); // Updates the timers' seconds

//         if (Seconds == 59) { // Updates the timers' minutes
//             Minutes = updateMinutes(Minutes);
//         }

//         timer = Minutes + ":" + Seconds;
//         document.getElementsByClassName("timer-slot").innerHTML = timer;

//         if (Minutes == 0) { // Exits the loop
//             timerDone = True;
//         }
//     }
// }

$( ".startButton" ).click( function ( e ){
    let Minutes = 25;
    let Seconds = 0;
    let timerDone = false;

    // while ( !timerDone ) { too much potential for bugs rn T_T
    for (let i = 0; i < 10; i ++){
        // Seconds = setTimeout( updateSeconds( Seconds ), 1000 ); // Updates the timers' seconds

        // I MOVED IT BEFORE SECONDS FUNCTION
        if ( Seconds == 0 ) { // Updates the timers' minutes
            Minutes--;
            Seconds = 59;
            updateTimer(Minutes, Seconds);
        }

        setTimeout( function() {
            console.log(Seconds);
            Seconds--;
        }, 1000 );

        updateTimer(Minutes, Seconds);

        if ( Minutes == 0 ) { // Exits the loop
            timerDone = True;
        }
    }
});

function updateTimer( minutes, seconds ) {
    let timer = minutes + ":" + seconds;
    console.log(document.getElementById( "timer" ).innerText);
    document.getElementById( "timer" ).innerText = timer;
}

// /**
//  * @purpose Updates the seconds in a website
//  * 
//  * @return Digit representing the seconds placement in a time-formatted string
//  */
// function updateSeconds(seconds) {
//     console.log("Updating seconds..");
//     // if ((seconds - 1) < 0) {
//     if( seconds === 0 ){
//         seconds = 59;
//     }
//     else {
//         seconds--;
//     }
//     console.log( seconds );
//     return seconds;
// }

// /**
//  * @purpose Updates the minutes in a website
//  * 
//  * @return Digit representing the minutes placement in a time-formatted string
//  */
// function updateMinutes(minutes) {
//     return minutes--;
// }
