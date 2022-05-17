var minutes = 25;
var seconds = "00";
var rounds = 0;

var bell = new Audio("b15.mp3");

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }
    
    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 0){
            if (minutes <= 0) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                
                rounds += 1;
                
                if (rounds == 4){
                    document.getElementById("done").innerHTML = "Set completed! Take a 20 minute break.";
                    rounds = 0;
                } else {
                    document.getElementById("done").innerHTML = "Session completed! Take a 5 minute break.";
                }

                document.getElementById("done").classList.add("show_message");

                bell.play();
            }
            seconds = 60;
        }
    }
}
