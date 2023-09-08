class Card {
    constructor(cardNumber, cardName, cardSuit) {
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardSuit = cardSuit;
    }

    getCardString() {
        return `${this.cardName} of ${this.cardSuit}`;
    }

}

class Player {
    constructor() {
        this.hand = [];
        this.points = 0;
        this.tie = 0;
    }
}

function shuffle(deckArray) {
    return deckArray.sort(
        () => Math.random() - 0.5);
}


let player1 = new Player;
let player2 = new Player;
var deckOfCards = [];

const suits = [
    'Hearts',
    'Spades',
    'Clubs',
    'Diamonds'
]; 

const values = {
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'Jack',
    12: 'Queen',
    13: 'King',
    14: 'Ace'
}; 

//Here runs a loop to iterate and push the card and suit to the the deckOfCards array, giving us a deck of 52 cards
for (const value in values) {
    for (const suit in suits) {
        deckOfCards.push(new Card(value, values[value], suits[suit]));
    }
} 


//This shuffles the deckOfCards array
deckOfCards = shuffle(deckOfCards); 

//This will split the shuffled deck in half and give one half to player1 and the other half to player 2
const splitHalf = Math.floor(deckOfCards.length / 2);
player1.hand = deckOfCards.slice(0, splitHalf);
player2.hand = deckOfCards.slice(splitHalf);



//This will iterate through how many cards are in hand and compare values of the cards and add a point to the respective player point counter if they have a higher card and add a point to the tie counter if it's a tie
for (let i = 0; i < player2.hand.length; i++) {
    if (player1.hand[i].cardNumber == player2.hand[i].cardNumber) {
        player1.tie += 1
    } else {
        if (player1.hand[i].cardNumber > player2.hand[i].cardNumber) {
            player1.points += 1;
            // console.log('player 1 wins');
        } else {
            player2.points += 1;
            // console.log('player 2 wins');
        }
    }
}

//This will console a tie with correct phrasing
if (player1.tie == 1) {
    console.log(`There was a tie ` + player1.tie + ' time')
} else if (player1.tie == 0) {
    console.log("There weren't any ties")
} else {
    console.log(`There was a tie ` + player1.tie + ' times')
}


//This will console which player wins
if (player1.points > player2.points) {
    console.log('Player 1 wins wih a score of: ' + player1.points)
} else {
    console.log('Player 2 wins with a score of: ' + player2.points)
}


