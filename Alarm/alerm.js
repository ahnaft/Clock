const audio = new Audio('mixkit-retro-game-emergency-alarm-1000.wav');
audio.loop = true;

function rqnoti(){
    if(Notification.permission === "granted"){;
    }
    else if (Notification.permission !== "denied" ) {
    Notification.requestPermission();}
    
    else if(Notification.permission === "denied") {
        alert("Please Enable Notification")
        Notification.requestPermission();
    }
    
    
}


rqnoti()

let alarmTime = null;
let alarmTimeout = null;


 function setAlarmTime(value){
    alarmTime = value;
   
 }

 function pushnoti(){
    (async () => {
       // create and show the notification
       const showNotification = () => {
           // create a new notification
           const notification = new Notification('ALARM!', {
               body: 'Tap To Dismiss',
               icon: 'alarm_FILL0_wght400_GRAD0_opsz48.png'
           });
   
           // close the notification after 10 seconds
           setTimeout(() => {
               notification.close();
           }, 10 * 1000);
   
           // navigate to a URL when clicked
           notification.addEventListener('click', () => {
   
               clearAlarm();
           });
       }
   
       // show an error message
       const showError = () => {
           const error = document.querySelector('.error');
           error.style.display = 'block';
           error.textContent = 'You blocked the notifications';
       }
   
       // check notification permission
       let granted = false;
   
       if (Notification.permission === 'granted') {
           granted = true;
       } else if (Notification.permission !== 'denied') {
           let permission = await Notification.requestPermission();
           granted = permission === 'granted' ? true : false;
       }
   
       // show notification or error
       granted ? showNotification() : showError();
   
   })();
    }








 function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

    
        
        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout, );
            alarmTimeout = setTimeout(() => pushnoti(), timeout,);
                

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
//notification


