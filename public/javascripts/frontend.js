//Author Alexander Kuemmel
//17.03.2020
/*
Startscript, welches Hauptseite aufruft und refreshed
adresse: Die URL welche gerade angezeigt werden soll
*/

console.log("Frontend geladen");

//var adresse = "https://www.hs-fulda.de";
var adresse = "https://www.fulda.de/";
var CHANGED = "1";

var myWindow = window.open(adresse, "fenster", "width=500,height=500");
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

setInterval(load, 2000); //refreshed die Hauptseite im Interval von X ms

function load() {
	check();
	if (CHANGED) {
		const url='http://localhost/users/adresse';
		//const url='http://voiceup.informatik.hs-fulda.de/users/adresse';
		Http.open("GET", url);
		Http.send();
	}
}

Http.onreadystatechange = (e) => {
	if(Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
		  console.log(Http.responseText)
		  adresse = Http.responseText;
		  window.open(adresse, "fenster");
	}
}

function check() {
	const url='http://localhost/users/changed';
	//const url='http://voiceup.informatik.hs-fulda.de/users/changed';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = (f) => {	
	if(HttpChanged.readyState === XMLHttpRequest.DONE && HttpChanged.status === 200) {
		CHANGED = ("1" == HttpChanged.responseText);
		
	}
}


