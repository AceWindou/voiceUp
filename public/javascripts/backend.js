//Author Alexander Kuemmel
//17.03.2020
/*
Wird nach Frontend geladen und erbt HTML-Methoden wie "GetElement..."
Handelt Suchanfragen auf Datenbank
Input: Frage(Wer ist verantwortlich...), Referenz(...fuer das Standesamt?)
Output: Antwort auf Frage(Person die verantwortlich ist)
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

console.log("Backend geladen");
console.log(this.statusText);

var datenbank = new XMLHttpRequest();

datenbank.open("GET", "../datenbank/datenbank.xml");

datenbank.onreadystatechange = function () {
    if (this.readyState == 4) {
		if (this.status == 200) {
			console.log("Datenbank geladen");
		} else {
			console.log("Konnte Datenbank nicht laden");
		}
    }
};
datenbank.send();

function search() {
	var x, i, txt, xmlDoc; 
	xmlDoc = datenbank.responseXML;
	x = xmlDoc.getElementsByTagName("name");
	for (i = 0; i < x.length; i++) { 
		console.log( x[i].childNodes[0].nodeValue );
	}
}