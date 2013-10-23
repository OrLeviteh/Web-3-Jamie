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


setInterval(loadMoreImages, 10000);
loadMoreImages();

