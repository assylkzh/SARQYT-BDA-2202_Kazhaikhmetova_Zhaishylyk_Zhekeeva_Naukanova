// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
});

// slideBar
function openNav() {
  document.getElementById("Sidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//entering fade in 
var enteringImage = document.getElementById("entering");
enteringImage.addEventListener("load", function() {
  enteringImage.style.opacity = "2";
});

// music
var audio = document.getElementById("music");
var playButton = document.getElementById("playButton");
var playIcon = document.getElementById("playIcon");

function play() {
  if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-circle-play");
        playIcon.classList.add("fa-circle-pause");
  } else {
        audio.pause();
        playIcon.classList.remove("fa-circle-pause");
        playIcon.classList.add("fa-circle-play");
      }
}

//animations 
//rows
window.addEventListener("scroll", reveal);
function reveal(){
  var reveals=document.querySelectorAll(".row");
  for(var i=0; i<reveals.length; i++){
    var windowHeight=window.innerHeight;
    var revealTop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;

    if(revealTop<windowHeight-revealpoint)
    reveals[i].classList.add("active");
    else reveals[i].classList.remove("active");
  }

}

