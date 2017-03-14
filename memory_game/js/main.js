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

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function(cardID) {
	var card = cards[cardID];
	console.log("User flipped " + card.rank);
	console.log(card.suit + card.cardImage);
	cardsInPlay.push(card.rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

flipCard(0);
flipCard(2);

