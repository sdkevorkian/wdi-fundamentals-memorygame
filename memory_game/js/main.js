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

//first card flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);

//second card flipped
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

// test if 2 cards in play, and if match
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

