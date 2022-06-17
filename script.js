



setInterval(function(){ 
    var background = document.body.background
    var abo = document.getElementById("abortion")
    var ampmss = document.getElementById("ampms")
    var moinites = document.getElementById("min")
    var secoindes = document.getElementById("sec")
    var hours = (new Date()).getHours();
    var minutes = (new Date()).getMinutes();
    var seconds = (new Date()).getSeconds();
    //this code runs every second 
var ampm = (hours >= 12) ? "PM" : "AM"
abo.innerHTML = (hours % 12);
moinites.innerHTML = (minutes);
secoindes.innerHTML = (seconds);
ampmss.innerHTML = (ampm)
}, 100);


// this code changes the background depending wheather it is night or day time
var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 20) {
        document.body.background = "dayttime.jpg";
    }
    else {
        document.body.background = "nighttime.jpg";
    }
}
