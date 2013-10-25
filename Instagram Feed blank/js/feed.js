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




var previousMax = 0;
var howManyTimes = 0;



function checkImagesDan() {
	
	request("get","./feed.php",{},function(err,something,status,response) {
		var json = JSON.parse(response.responseText);
		
		var imagesEl = document.querySelector(".instafeed");
		
		console.log('totalImages' + json.images.length);
		console.log('previous' +previousMax);
		//console.log('previous' + previousMax);
		
		function loadImagesDan(){
			if (json.images.length > 19){   //loads the last 20 images (last according to messy instagram)
		      
			
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
			var divs = document.getElementsByClassName("cuteBunnyImages")  //check for new images and add and replace
			
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
	
		});		
	}
		
checkImagesDan();
setInterval(checkImagesDan, 5000);   //checks for new images every 5 sec

