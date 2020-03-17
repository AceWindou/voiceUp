//Author Alexander Kuemmel
//17.03.2020 Prototyp
/*
Dieses Script catched url anfragen von Alexa und leitet diese an die Datenbank weiter
Changed = 1/0 wird in frontend.js abgefragt
res.send = return Statement der Anfrage
*/
var express = require('express');

var router = express.Router();

var ADRESSE;
var CHANGED = "0";

router.get('/name*', function(req, res, next) {
	CHANGED = "1";
	ADRESSE = "";
	//var str = router.stack[0].path; //holt sich die Request-URL
	
	res.send(router.stack[0].path);
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