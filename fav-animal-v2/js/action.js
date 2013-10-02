var bunniesword = document.getElementsByClassName("bunnies").item(0);
var hi = document.getElementById("hi");
var bra = document.getElementById("bra");
var ooh = document.getElementById("ooh");
var head = document.getElementById("head");
var upside = document.getElementById("upside");

bra.addEventListener("click",function(evt1) {
	evt1.preventDefault();
/*
	//bra.style.opacity = 0;
	bra.style.display="none";
	hi.style.display="inline";
	//hi.style.opacity = 1;
*/
	
	bunniesword.classList.toggle('is-clicked');
	bunniesword.classList.remove('is-clicked5');

	
},false);

hi.addEventListener("click",function(evt1) {

	evt1.preventDefault();
/*	hi.style.display="none";
	ooh.style.display="inline";
*/
	
	bunniesword.classList.toggle('is-clicked');
	bunniesword.classList.toggle('is-clicked2');


},false);

ooh.addEventListener("click",function(evt1) {
	evt1.preventDefault();
/*
	ooh.style.display="none";
	head.style.display="inline";
*/
	bunniesword.classList.toggle('is-clicked2');
	bunniesword.classList.toggle('is-clicked3');		

},false);

head.addEventListener("click",function(evt1) {
	evt1.preventDefault();
/*
	head.style.display="none";
	upside.style.display="inline";
*/
	bunniesword.classList.toggle('is-clicked3');
	bunniesword.classList.toggle('is-clicked4');		
	
},false);

upside.addEventListener("click",function(evt1) {
	evt1.preventDefault();	
/*
	upside.style.display="none";
	bra.style.display="inline";
*/
	bunniesword.classList.toggle('is-clicked4');
	bunniesword.classList.toggle('is-clicked5');
	//bra.style.opacity = 1;
		
	
},false);