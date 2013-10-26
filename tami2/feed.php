<?php
	

	include_once('./autoloader.php');
	include_once('./idn/idna_convert.class.php');

	$tag = "tamiyakir";
	$url = "http://instagram.com/tags/{$tag}/feed/recent.rss";

//	SimplePie_Misc::output_javascript();
	$feed = new SimplePie();
	$feed->set_feed_url($url);
//	$feed->enable_order_by_date(false); 
	$feed->force_feed(true);
	$feed->cache = false;
	$success = $feed->init();
	$feed->handle_content_type();

	$result = array();

	if($feed->error()) {
		$result['status'] = 'failed';
	}
	else {
		$result['status'] = 'okay';
		$result['images'] = array();

		foreach($feed->get_items() as $item) {
			$content = $item->get_content();
			$result['images'][] = $content;
		}

		header('Content-type: application/json');
		header('Access-Control-Allow-Origin "*"');
	
		echo json_encode($result);
	}