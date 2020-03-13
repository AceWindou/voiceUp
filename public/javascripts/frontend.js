//Author Alexander Kuemmel
//13.03.2020 Prototyp

//Startscript, welches Hauptseite aufruft und refreshed
//Reagiert auf res.send und Changed(globale Variable) von users.js

console.log("Frontend geladen");

var adresse = "https://www.hs-fulda.de";
var CHANGED = "1";

var myWindow = window.open(adresse, "fenster", "width=500,height=500");
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

setInterval("load();", 2000);//laed die Hauptseite im Interval von X ms

function load() {
	check();
	if (CHANGED) {
		const url='http://localhost:80/users/adresse';
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
	const url='http://localhost:80/users/changed';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = (f) => {	
	if(HttpChanged.readyState === XMLHttpRequest.DONE && HttpChanged.status === 200) {
		CHANGED = ("1" == HttpChanged.responseText);
	}
}


