//the call to the Yahoo Weather API
var getWeatherFromYahoo = function(city, state){
    //inject args into url
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city.toLowerCase()+"%2C%20"+state.toUpperCase()+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	
    //form the request
    var xhr = new XMLHttpRequest();

    //define the callback for when we get a response
	xhr.onload = function() {
        //make sure the response is legit and not an error
	    if (xhr.readyState == 4 && xhr.status == 200) {

            //parse the response into JSON
            var arr = JSON.parse(xhr.responseText);

            //save my hands
            var results = arr.query.results;

            //define the element we're going to modify
            var el = document.getElementById("result");

            //null check
            if(results!==null) {
                //grab the info
                var targetForecast = results.channel.item.forecast[0];
                var tempHigh = targetForecast.high;
                var tempLow = targetForecast.low;
                var date = targetForecast.date;
                var day = targetForecast.day;
                var conditions = targetForecast.text;

                //output string
                var string = "The forecast of " + city + ", " + state; 
                string+= " for " + day + ", " + date + ", is ";
                string+= conditions + "\nwith ";
                string+= "a high of " + tempHigh + " degrees and lows of " + tempLow + " degrees";

                //update the element
                el.value = string;
            }
            else {
                //tell the user we couldn't find info on the place
                el.value = "Could not find "+city+", "+state+".\nIs that in the USA?";
            }

            //make call to the TTS-API used in getMp3.js and getMp3.html
            setMp3AndPlay(el.value.replace(" "+"+"));
	    }
	};

    //open the connection
	xhr.open("GET", url, true);

    //send the request
	xhr.send();
}

//click handler for the button
var onClick = function(){
	var city = document.getElementById("cityField").value;
	var state = document.getElementById("stateField").value;
	
    getWeatherFromYahoo(city, state);
}