var frameModule = require("ui/frame");
var PokerViewModel = require("./poker-view-model");
var Player = require("./Player");
var Deck = require("../class/Deck");

//var cards = require("../home/home-page");

const PLAYERCOUNT = 1;
let players = [PLAYERCOUNT];
let myinfo = null;
let myDeck ;

function onLoaded(args) {
	myDeck = new Deck.Deck();
	myDeck.CreateCards();
	myDeck.ShuffleCards();
	myDeck.CardLog();
	
}

function onStartBtnTab(args){
	console.log("start poker");
	var topmost = frameModule.topmost();
    //console.log(topmost);
    topmost.navigate("poker/poker_gamepage");
}

exports.onLoaded = onLoaded;
exports.onStartBtnTab = onStartBtnTab;
exports.player = myinfo;