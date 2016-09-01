


// Create a Deck object constructor. A deck should have the following functionality:

// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

function Deck(){
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'],
		values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'],
		self = this;

	this.cards = []

	suits.forEach(function(suit){ //for each suit
		values.forEach(function(value){ // for each value
			self.cards.push(new Card(value,suit)); //pushes to array cards above
		});
	});
}

var myDeck = new Deck(); //makes a full deck of 52 cards (one value for each suit)
console.log(myDeck);

Deck.prototype.shuffle = function(){
	var unshuffledEdge = this.cards.length,
		cardToShuffleIdx,
		temp;

	while(unshuffledEdge>0){
		cardToShuffleIdx = Math.floor(Math.random()*unshuffledEdge);
		unshuffledEdge -= 1;

		temp = this.cards[cardToShuffleIdx]
		this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge];
		this.cards[unshuffledEdge] = temp;
	}
	return this
}

console.log(myDeck.shuffle())
Deck.prototype.reset = function(){
	
}
Deck.prototype.dealRandomCard = function(){
	
}

function Card(value, suit){
	this.value = value;
	this.suit = suit;
}

function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.takeCard = function(){

}

Player.prototype.discard = function(){
	
}