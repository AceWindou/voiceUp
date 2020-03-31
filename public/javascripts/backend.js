//Author Alexander Kuemmel
//31.03.2020
/*
Wird nach Frontend geladen und erbt HTML-Methoden wie "GetElement..."
Handelt Suchanfragen auf Datenbank ab
Bsp "Wer ist verantwortlich fuer das Standesamt?":
Parameter: verantwortlich -> Standesamt
Antwort: name -> Christine.... ff
*/
console.log("Backend geladen");

const DOMParser = require('xmldom').DOMParser;
const fs = require('fs');

var adresse = "https://www.hs-fulda.de";
var data, doc;

fs.readFile('public/datenbank/datenbank.xml', 'utf8', (err, data) => {
	if (err) throw err;
	doc = new DOMParser().parseFromString(data);
});

function search(param) {
	var entries, value, result;
	var answer = [];
	
	//Eintraege fuer param[0] (verantwortlich)
	entries = doc.getElementsByTagName(param[0]);
	for (i = 0; i < entries.length; i++) { 
		//Eintrage fuer param[1] (Standesamt)
		value = entries[i].childNodes[0].nodeValue;
		if (value == param[1]) {
			//Eintrage fuer param[2] (name) im Parent
			result = entries[i].parentNode;
			adresse = result.getElementsByTagName('URL')[0].childNodes[0].nodeValue;
			result = result.getElementsByTagName(param[2])[0].childNodes[0].nodeValue;
			//Aktualisiere die Hauptseite mit Anfrageprofil
			answer.push(result);
		}
	}
	answer.push(adresse);
	return answer;
}

module.exports = search; //Macht search() global verfuegbar
