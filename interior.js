var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
});

function openNav() {
  document.getElementById("Sidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
var music=document.getElementById("music")
var isPlaying = false;

function play() {
  isPlaying ? myAudio.pause() : music.play();
};

music.onplaying = function() {
  isPlaying = true;
};
music.onpause = function() {
  isPlaying = false;
};

