const checkbox = document.getElementById('dn')





if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


setInterval(function(){ 
    var background = document.body.background;
    var abo = document.getElementById("abortion");
    var ampmss = document.getElementById("ampms");
    var moinites = document.getElementById("min");
    var secoindes = document.getElementById("sec");
    var x = document.getElementById("amorpms");
    var hours = (new Date()).getHours();
    var minutes = (new Date()).getMinutes();
    var seconds = (new Date()).getSeconds();
    //this code runs every second 
var ampm = (hours >= 12) ? "PM" : "AM";
x.innerHTML = (ampm);


var total = hours % 12+ ":" + minutes + ":" + seconds;




abo.innerHTML = (total);

}, 100);


