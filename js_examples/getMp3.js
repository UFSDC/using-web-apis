var setMp3AndPlay = function (phrase){
	//set the src of the source tag
	var link = "http://tts-api.com/tts.mp3?q="+phrase;
	document.getElementById("audioSrc").src = link;

	//reload and play the new src
	var audioEl = document.getElementById("sources");
	audioEl.load();
	audioEl.play();
}

var onClick = function (){
	//get the value from the textarea
	var input = document.getElementById("input").value;

	//replace the spaces with plus signs
	var phrase = input.replace(" ", "+");

	//send the request
	setMp3AndPlay(phrase);
}
