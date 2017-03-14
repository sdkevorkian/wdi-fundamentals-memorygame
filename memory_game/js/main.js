// when 1st card is clicked on...
	//display card 
	//store card value
	//start timer for first card of game
//when second card clicked on
	//display card
	//store card value
	//if same as 1st card, keep open, score +1
	//if not same, flip both over and start again
//when all cards flipped
	//end game, stop timer

console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function(cardID) {
	card = cards[cardID];
	console.log("User flipped " + cards[cardID])
	cardsInPlay.push(cards[cardID]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

flipCard(0);
flipCard(1);

