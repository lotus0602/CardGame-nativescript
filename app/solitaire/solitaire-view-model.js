var Observable = require("data/observable");

function SolitaireViewModel() {
    var viewModel = Observable.fromObject({
        flipCard: function (cardData) {
            this.set('flip_card', cardData);
        },

        makeCardToString: function (cardData) {
            let s = "";
            if (cardData.number === 11) {
                s += "Num : J";
            } else if (cardData.number === 12) {
                s += "Num : Q";
            } else if (cardData.number === 13) {
                s += "Num : K";
            } else if (cardData.number === 1) {
                s += "Num : A";
            } else {
                s += "Num : " + cardData.number;
            }
            s += "\n";

            if (cardData.pattern === 0) {
                s += "Shape ◆";
            } else if (cardData.pattern === 1) {
                s += "Shape ♥";
            } else if (cardData.pattern === 2) {
                s += "Shape ♠";
            } else if (cardData.pattern === 3) {
                s += "Shape ♣";
            }
            s += "\n";

            if (cardData.color === 0) {
                s += "Color Red";
            } else if (cardData.color === 1) {
                s += "Color Black";
            }
            return s;
        }
    });

    return viewModel;
}

module.exports = SolitaireViewModel;