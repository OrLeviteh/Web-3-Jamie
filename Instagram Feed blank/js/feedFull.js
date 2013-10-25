//================================================feed of all images========================


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
	
	request("get","./feedFull.php",{},function(err,something,status,response) {
		var json = JSON.parse(response.responseText);
		
		var imagesEl = document.querySelector(".instafeed");
		
		
		function loadImagesDan(){
			
			for(var i=(json.images.length-previousMax-1);i>=0;i--) {
				var div = document.createElement("div");
				div.innerHTML = json.images[i];
				div.setAttribute("class", "cuteBunnyImages");
				imagesEl.insertBefore(div,imagesEl.firstChild);
				}
				
				previousMax = json.images.length;
			}
			
				if (json.images.length > previousMax) {
				  
				loadImagesDan();
				
				}
		});		
	}
		
checkImagesDan();
setInterval(checkImagesDan, 120000);   //this will check every 2 min (120 sec)



