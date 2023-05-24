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
    x.style.height = "200px";
    x.style.width = "200px";
}
function normal(x) {
    x.style.height = "100px"
    x.style.width = "100px";
}

//keypress 

function thanks() {
    var textElement = document.querySelector("#letter");
    var text = "Сарқыт Жобасына баға бергеніңіз үшін алғыс білдіреміз!";
    var speed = 90;

    function typeWriter() {
      if (text.length > 0) {
        textElement.innerHTML += text.charAt(0);
        text = text.slice(1);
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }

  //popups 
  function openPopupAssyl() {
    var popup = document.getElementById('popupAssyl');
    popup.style.display = 'block';
  }
  
  function closePopupAssyl() {
    var popup = document.getElementById('popupAssyl');
    popup.style.display = 'none';
  }

  function openPopupAssem() {
    var popup = document.getElementById('popupAssem');
    popup.style.display = 'block';
  }
  
  function closePopupAssem() {
    var popup = document.getElementById('popupAssem');
    popup.style.display = 'none';
  }

  function openPopupNurai() {
    var popup = document.getElementById('popupNurai');
    popup.style.display = 'block';
  }
  
  function closePopupNurai() {
    var popup = document.getElementById('popupNurai');
    popup.style.display = 'none';
  }

  function openPopupDilnaz() {
    var popup = document.getElementById('popupDilnaz');
    popup.style.display = 'block';
  }
  
  function closePopupDilnaz() {
    var popup = document.getElementById('popupDilnaz');
    popup.style.display = 'none';
  }