


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

Deck.prototype.dealRandomCard = function(){
	//ternary operator ahead!
	return (this.cards.length > 0) ? this.cards.pop() : null;
	//basically means return (if the length of the cards is greater than 0, pop the last card of the array. If not, then return null.)
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
	this.hand.push(deck.dealRandomCard());
	return this;
}

Player.prototype.discard = function(cardIdx){
	if (this.hand.length > cardIdx){
		this.hand.splice(cardIdx, 1);
	}
	return this;
}

var charlie = new Player('charlie');
var deck = new Deck()














