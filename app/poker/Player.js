class Player{
	constructor(){
		this.iMoney =1000;
		this.arrMyCards = [2];
		this.strName = "test";
	}

	getMoney(){
		return this.iMoney;
	}
	getName(){
		return this.strName;
	}

	setMoney(iMoney){
		this.iMoney = iMoney;
	}
	setName(strName){
		this.strName = strName;
	}

	setarrMyCards(firstCard, secondCard){
		this.arrMyCards[0] = firstCard;
		this.arrMyCards[1] = secondCard;
	}
	getarrMyCards(){
		return this.arrMyCards;
	}
}

exports.Player = Player;