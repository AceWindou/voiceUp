//Author Alexander Kuemmel
//17.03.2020
/*
Wird nach Frontend geladen und erbt HTML-Methoden wie "GetElement..."
Handelt Suchanfragen auf Datenbank
Input: Frage(Wer ist verantwortlich...), Referenz(...fuer das Standesamt?)
Output: Antwort auf Frage(Person die verantwortlich ist)
*/
console.log("Backend geladen");

/*
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const datenbank = new XMLHttpRequest();

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
*/


const XmlReader = require('xml-reader');
const xmlQuery = require('xml-query');
const xml = 
`<contact>
	<URL></URL>
	<PNR>1234502</PNR>
	<amt>Haupt- und Personalamt</amt>
	<name>Johannes</name>
	<nachname>Heller</nachname>
	<verantwortlich>Magistratspressestelle</verantwortlich>
	<raum>F 106</raum>
	<sprechzeit></sprechzeit>
	<phone>0661 102 1004</phone>
</contact>` ;

const ast = XmlReader.parseSync(xml);
//console.log(ast);

console.log( xmlQuery(ast).find('amt').children().text() ); 
