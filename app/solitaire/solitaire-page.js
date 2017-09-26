var frameModule = require("ui/frame");
var SolitaireViewModel = require("./solitaire-view-model");
var Deck = require("../class/Deck");

let viewModel;
let gameDeck;
let currentDeckIndex = 0;

// var solitaireViewModel = new SolitaireViewModel();

function onLoaded(args) {
    console.log("Solitaire Start");

    const component = args.object;
    viewModel = new SolitaireViewModel();
    component.bindingContext = viewModel;

    gameDeck = new Deck.Deck();
    gameDeck.CreateCards();
    gameDeck.ShuffleCards();
    gameDeck.CardLog();
}

function flipCardFromDeck(args) {
    let currentCard = gameDeck.cards[currentDeckIndex];
    let stringCardData = viewModel.makeCardToString(currentCard);
    viewModel.flipCard(stringCardData);
    currentDeckIndex++;
    console.log("flipCardFromDeck Index : " + currentDeckIndex);
    console.log("CardToString : " + stringCardData);
}

exports.onLoaded = onLoaded;
exports.flipCardFromDeck = flipCardFromDeck;