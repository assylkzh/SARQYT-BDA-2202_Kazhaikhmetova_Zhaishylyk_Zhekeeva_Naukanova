// slideBar
function openNav() {
    document.getElementById("Sidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
  }
  
  function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

//starting fade in 
var enteringImage = document.getElementById("start-img");
enteringImage.addEventListener("load", function() {
  enteringImage.style.opacity = "1";
});

//typing 
document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.querySelector("h1");
    var text = "САРҚЫТҚА ҚОШ КЕЛДІҢІЗ!";
    var speed = 100; 
  
    function typeWriter() {
      if (text.length > 0) {
        textElement.innerHTML += text.charAt(0);
        text = text.slice(1);
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
});

//mouseOver logo
function big(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}
function normal(x) {
    x.style.height = "100px"
    x.style.width = "100px";
}
  