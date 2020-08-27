function realtimeclock(){

    var realclock = new Date();

    var hours = realclock.getHours();
    var mins = realclock.getMinutes();
    var seconds = realclock.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM"; //to convert AM and PM

    hours = (hours > 12) ? (hours-12) : hours; // to convert into 12 hour format

    hours = ("0" + hours).slice(-2);
    mins = ("0" + mins).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML= hours + " : " + mins + " : " + seconds + " " + amPm;

    var time = setTimeout(realtimeclock,500);

}