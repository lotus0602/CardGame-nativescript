var externCard = require("./card");
const CARDSIZE = 52;
class Deck{
	constructor(){
		this.cards = [52];
	}

	CreateCards(){

		let cards = this.cards;
		for (var j = 0; j < 4; j++) {
        	for (var k = 1; k <= 13; k++) {
            	cards[(j * 13) + k-1] = new externCard.Card(k, j, j % 2);
        	}
    	}
	}

	ShuffleCards(){
		console.log("Start Shuffle");

	    var tmpData =0;
	    var tempIDX =0;
	    for(var i =0; i<CARDSIZE ; i++){
	       var tmp = this.cards[i];
	       tempIDX = Math.floor(Math.random() * (CARDSIZE - i)) + i;
	       this.cards[i] = this.cards[tempIDX];
	       this.cards[tempIDX] = tmp;
	    }
	    
	}

	CardLog(){
		//check shuffled cards
   		 for (var i=0 ; i<CARDSIZE; i++){
 	        console.log("card info "+i+ " : "+ this.cards[i].number + 
  	              " " + this.cards[i].pattern + 
  	              " " + this.cards[i].color);
  	  }
	}
	
}

exports.Deck = Deck;