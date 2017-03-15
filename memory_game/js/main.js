// intialize variables - 1 to store card objects and 1 to store cards in play
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

//function checks if a match is present, if not resets cardsInPlay

var checkForMatch = function(){
	var result = document.getElementById("match-or-not");
	
	if (cardsInPlay[0] === cardsInPlay[1]){
		result.textContent = "You found a match!";
	} else {
		result.textContent = "Sorry, try again.";

	}
	cardsInPlay = [];
};

//function whenever we click on a card to flip it over

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
	this.setAttribute("src", card.cardImage);
	cardsInPlay.push(card.rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		}
};

//initial function to create game board
var createBoard = function(){
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);
	}
};

createBoard();

