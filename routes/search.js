//Author Alexander Kuemmel
//31.03.2020
/*
Dieses Script catched url anfragen von Alexa und leitet diese an die Datenbank weiter
Bsp "Wer ist verantwortlich fuer das Standesamt?":
voiceup.informatik.hs-fulda.de/search/verantwortlich/Standesamt/name
Parameter: verantwortlich -> Standesamt
Anfrage: name -> Christine.... ff
*/
const express = require('express');
const search = require('../public/javascripts/backend.js');
//const getAdresse = require('../public/javascripts/backend.js');

var router = express.Router();

// http:// ist wichtig, da sonst localhost/adresse aufgerufen wird
var ADRESSE = "https://www.hs-fulda.de";
var CHANGED = "0";
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/search/*', function(req, res, next) {
	var str = router.stack[0].path; //holt sich die Request-URL
	console.log(router.stack[0].path);
	var param = extractParam(str);
	var answer = search(param);
	CHANGED = "1";
	ADRESSE = answer[answer.length -1]
	answer.pop();
	res.send(answer);
});

function extractParam(str) {
	str = str.slice(8, str.length);
	str = str.split('/');
	console.log("Suche nach:");
	console.log(str);
	return str;
}

router.get('/adresse', function(req, res, next) {
	CHANGED = "0";
	res.send(ADRESSE);
});

router.get('/changed', function(req, res, next) {
	res.send(CHANGED);
});

module.exports = router;
