<?php
	$shows = array();
	$shows['Shows'] = array(
		'The Good Wife'=>array('Currently Running'=>'Yes','Genere'=>'Drama','Network'=>'CBS','Actors'=>array('Julianna Margulies','Matt Czuchry','Josh Charles')),
		'Suits'=>array('Currently Running'=>'Hiatus','Genere'=>'Drama','Network'=>'USA','Actors'=>array('Gabriel Macht','Patrick J. Adams','Rick Hoffman')),
		'True Blood'=>array('Currently Running'=>'Hiatus','Genere'=>'Drama','Network'=>'HBO','Actors'=>array('Anna Paquin','Stephen Moyer','Alexander Skarsgard')),
		'Homeland'=>array('Currently Running'=>'Yes','Genere'=>'Drama','Network'=>'ShowTime','Actors'=>array('Claire Danes','Damian Lewis','Mandy Patinkin')),
		'Modern Family'=>array('Currently Running'=>'Yes','Genere'=>'Drama','Network'=>'ABC','Actors'=>array("Ed O'Neill",'Sofía Vergara','Julie Bowen'))
);

	//header('Access-Control-Origin: *');
	//header('Content-Type: application/json');
	
?> Showing only current shows out of the array:<br><?php
	
	
foreach($shows as $show=>$name) {
	foreach ($name as $title=>$content){
	
		
		if (in_array('Yes', $content)) {
					echo $title; ?> <br>  <?php
					}
	}

}


?> <br> <br> <br>  The Entire Array: <br><?php

echo json_encode($shows);


?>Code is <a href="">HERE</a><?php





/*
	
foreach($shows as $show=>$name) {
	
		foreach($show as $run) {
			echo json_encode ($run["Currently Running"]);
			foreach ($run as $work) {
				//echo json_encode ($work);
				foreach ($work as $ugh) {
					//echo json_encode ($ugh);
				}
				
			}

	}
}
	
*/
//echo $shows['Shows']['The Good Wife']['Currently Running'];

//echo json_encode ($shows[0]);

/*
foreach($shows as $show) {
		
		//echo json_encode($show);
		
		
		foreach($show as $run) {
			
			echo json_encode($run);			

		}
	}
*/



/*

foreach($shows as $show) {
		foreach($show as $run) {
			
			if (in_array('Yes', $run)) {
			echo json_encode ($shows);
			echo $shows['Shows']['The Good Wife'];
			}
			
			else {
			echo 'No Running Shows';
			}

		}
	}

*/






?>




