function request(method, url, data, cb) {
  var r;
  try {
    r = new XMLHttpRequest();
    r.open(method, url, true);
    r.onreadystatechange = function() {
      if (r.readyState !== 4) {
        return;
      }
      if (r.status !== 200) {
        return cb(r.statusText, null, r.status, r);
      }
      return cb(null, r.responseText, r.status, r);
    };
    r.send(data || undefined);
  } catch (err) {
    return cb(err, null, r.status, r);
  }
};


/*

function loadMoreImages() {
	request("get","./feed.php",{},function(err,something,status,response) {
		var json = JSON.parse(response.responseText);
		
		var imagesEl = document.querySelector(".instafeed");
		for(var i=0;i<json.images.length;i++) {
			var div = document.createElement("div");
			div.innerHTML = json.images[i];
			imagesEl.insertBefore(div,imagesEl.firstChild);
		}
	});
}


setInterval(loadMoreImages, 20000);
loadMoreImages();
*/
//================================================DAN IS DOING STUFF HERE

var previousMax = 0;
var howManyTimes = 0;

// LIMITING TO 20

/*
setInterval(function divRemoverPowerAwesomer(){
	
	var dividends = document.getElementsByClassName("cuteBunnyImages")
	
for(var i = 0; i < dividends.length; i++)
{
   //Distribute(dividends.item(i));
   if (i > 9){
	   dividends[i].parentNode.removeChild(dividends[i]);
	   
   }
}
	
	console.log(dividends.length);
	
}, 1);
*/


//END LIMIT

function checkImagesDan() {
	
	request("get","./feed.php",{},function(err,something,status,response) {
		var json = JSON.parse(response.responseText);
		
		var imagesEl = document.querySelector(".instafeed");
		
		console.log('totalImages' + json.images.length);
		console.log('previous' +previousMax);
		//console.log('previous' + previousMax);
		
		function loadImagesDan(){
			if (json.images.length > 19){ 
		      
			
			for(var i=19;i>=0;i--) {
				var div = document.createElement("div");
				div.innerHTML = json.images[i];
				div.setAttribute("class", "cuteBunnyImages");
				imagesEl.insertBefore(div,imagesEl.firstChild);
				}	
			}else{
		  for(var i=json.images.length-1;i>=0;i--) {
				var div = document.createElement("div");
				div.innerHTML = json.images[i];
				div.setAttribute("class", "cuteBunnyImages");
				imagesEl.insertBefore(div,imagesEl.firstChild);
				}
				
		}
		}
			
			
			function replaceImagesDan(){
			var divs = document.getElementsByClassName("cuteBunnyImages")
			
			if (previousMax==20) {			 
				for(var i=19;i>=0;i--) {
				if (divs[i].innerHTML != json.images[i]){
				divs[i].innerHTML = json.images[i];
				}
				//div.setAttribute("class", i);				
				//imagesEl.insertBefore(div,imagesEl.firstChild);
				}
			}else{
			  if (divs[0].innerHTML != json.images[0]) {			  
			      				
				var div = document.createElement("div");
				div.innerHTML = json.images[0];
				div.setAttribute("class", "cuteBunnyImages");
				imagesEl.insertBefore(div,imagesEl.firstChild);
			  }
			  
				
				previousMax = divs.length;
			}
			}

			if (howManyTimes==0){
				
				loadImagesDan();
				howManyTimes++;
			} else{
				replaceImagesDan();
			}
			//replaceImagesDan();
				
				
			
/*if (json.images.length > previousMax){
					for(var i=(json.images.length - previousMax-1);i>=0;i--) {
				var div = document.createElement("div");
				var idn = json.images.indexOf(json.images)
				div.setAttribute("class", "cuteBunnyImages");
				div.innerHTML = json.images[i];
				imagesEl.insertBefore(div,imagesEl.firstChild);
				}	
			
					previousMax = json.images.length;
					//divRemoverPowerAwesomer();					
			}	*/		
		});		
	}
		
checkImagesDan();
setInterval(checkImagesDan, 5000);

//checkImagesDan();
//setInterval(checkImagesDan, 3000);




//================================================dan is done, carry on

/*
setInterval(function(){

console.log('yay');


 }, 3000);
*/

/*
Ask him this. The function "request" creates a set number of images.length. However, this number is not consistent and images added to instagram are not, in turn, added as a number in the "length". Is there a way to make the "request" function simply add to images.length when an image is added?

Check console, the numbers are not consistent. They change drastically.
*/


