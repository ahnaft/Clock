const audio = new Audio('mixkit-retro-game-emergency-alarm-1000.wav');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;


 function setAlarmTime(value){
    alarmTime = value;
   
 }


 function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}


function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}











var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 20) {
        document.body.background = "dayttime.jpg";
    }
    else {
        document.body.background = "nighttime.jpg";
    }
}
