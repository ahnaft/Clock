const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}); //Navbar



const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
}); //made by ahnaf dialouge box


//The clock//
setInterval(function(){
  var clock = document.getElementById('clock');
  var ampm = document.getElementById('ampm');
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  const oampm = hours >= 12 ? 'PM' : 'AM';
  
  const total = hours / 12 + ":" + minutes + ":" + seconds;
  
  ampm.innerHTML = oampm;
  clock.innerHTML = total;

}, 100);


