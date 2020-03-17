//Author Alexander Kuemmel
//17.03.2020 Prototyp

//Dieses Script catched url anfragen von Alexa und leitet diese an die Datenbank weiter
//Changed = 1/0 wird in frontend.js abgefragt
//res.send = return Statement der Anfrage

var express = require('express');
var router = express.Router();

var ADRESSE;
var CHANGED = "0";

router.get('/name*', function(req, res, next) {
	//Gibt den Request-Pfad zurueck
	res.send(router.stack[0].path);
});

router.get('/karim', function(req, res, next) {
	CHANGED = "1";
	ADRESSE = "https://www.hs-fulda.de/angewandte-informatik/ueber-uns/professuren/details/person/prof-dr-karim-khakzar-307/contactBox";
	res.send("ok: karim");
});

router.get('/kathrin', function(req, res, next) {
	CHANGED = "1";
	ADRESSE = "https://www.hs-fulda.de/sozialwesen/ueber-uns/professuren/details/person/prof-dr-kathrin-becker-schwarze-17/contactBox";
	res.send("ok: kathrin");
});

router.get('/adresse', function(req, res, next) {
	CHANGED = "0";
	res.send(ADRESSE);
});

router.get('/changed', function(req, res, next) {
	console.log(CHANGED);
	res.send(CHANGED);
});

module.exports = router;
