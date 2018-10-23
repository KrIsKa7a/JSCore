function timer() {
    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");
    let startBtn = $("#start-timer");
    let stopBtn = $("#stop-timer");

    let time = 0;
    let interval = null;

    startBtn.on("click", function () {
       if (interval === null) {
           interval = setInterval(incrementTime, 1000);
       }

       function incrementTime() {
           time++;

           let hoursString = ("0" + Math.floor(time / 60 / 60)).slice(-2);
           let minutesString = ("0" + Math.floor((time / 60) % 60)).slice(-2);
           let secondsString = ("0" + Math.floor(time % 60)).slice(-2);

           hours.text(hoursString);
           minutes.text(minutesString);
           seconds.text(secondsString);
       }
    });

    stopBtn.on("click", function () {
        clearInterval(interval);
        interval = null;
    });
}