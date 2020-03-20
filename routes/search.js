//Author Alexander Kuemmel
//20.03.2020
/*
Dieses Script catched url anfragen von Alexa und leitet diese an die Datenbank weiter
Bsp "Wer ist verantwortlich fuer das Standesamt?":
voiceup.informatik.hs-fulda.de/search/verantwortlich/Standesamt/name
Parameter: verantwortlich -> Standesamt
Anfrage: name -> Christine.... ff
*/
const express = require('express');
const search = require('../public/javascripts/backend.js');

var router = express.Router();

router.get('/*', function(req, res, next) {
	var str = router.stack[0].path; //holt sich die Request-URL
	var param = extractParam(str);
	search(param);
	res.send(router.stack[0].path);
});

function extractParam(str) {
	str = str.slice(1, str.length);
	str = str.split('/');
	console.log("Suche nach:");
	console.log(str);
	return str;
}

module.exports = router;