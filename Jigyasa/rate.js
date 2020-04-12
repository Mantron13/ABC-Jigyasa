var counter = 0;
var timeleft = 2700;

function convertSeconds(s) {
    var min = int(s/60);
    var sec = s % 60;
    return nf(min,2) + ':' + nf(sec,2); 
}

function setup() {
    noCanvas();

    var timer = select("#timer");
    timer.html(convertSeconds(timeleft-counter));

    function timeIt() {
        counter++
        timer.html(convertSeconds(timeleft-counter));
        if (counter == timeleft){
            counter = 0;
            alert("currency rate has been changed")
        }
    }
    window.setInterval(timeIt , 1000);  
}

