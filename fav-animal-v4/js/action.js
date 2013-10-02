var bunniesword = document.getElementsByClassName("bunnies").item(0);
var hi = document.getElementById("hi");
var bra = document.getElementById("bra");
var ooh = document.getElementById("ooh");
var head = document.getElementById("head");
var upside = document.getElementById("upside");


var current = 0,
    slides = document.getElementsByTagName("img");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : current = 0;
  slides[current].style.opacity = 1;
}, 3000);

