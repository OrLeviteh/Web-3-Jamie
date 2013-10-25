Hey all!

For a live constant event: 
LiveFeed.html pulls from instagram - 20 newest images (at least according to them, might not have 20) 
It currently updates every 5 sec. Change that in the feed.js file. 
Set the tag you want by changing feed.php.

*if the RSS feed is empty the page will be empty!!*

For a gallery that will last forever of all the pictures with that tag:
GalleryOfAll.html pulls from Statigram = all images. 
It takes at least 10 min to upload a new image. 
It currently requests a new pull every 2 min. Change that in the feedFull.js file. 
Set the tag you want by changing feedFull.php

Thank you to Jamie for getting the request working for me. 
Thank you to Dan for thinking of using Statigram for the Gallery!

Oh yeah - This uses a library for the xml pull request which means it might not work on servers that use communal servers (Like my Bluehost)
So use AWS or some other one that allows it.
(:
