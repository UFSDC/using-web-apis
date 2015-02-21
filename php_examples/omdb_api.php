<?php
	//requests the show with $id from omdb api
	function getSomethingFromOmdbApi($id){
		//the url to request from
		$url = "http://www.omdbapi.com/?i=tt0$id&plot=short&r=json";

		//set up curl to make the HTTP request
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $url);
		$result = curl_exec($ch);
		curl_close($ch); //close connection

		//decode the result from JSON to an array
		$result = json_decode($result, true);

		//return the result or an empty array
		if(count($result)>0) return $result;
		else return array();
	}
	
	//print the array results
	print_r(getSomethingFromOmdbApi(108891));
?>
