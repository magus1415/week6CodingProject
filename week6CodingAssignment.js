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

class Player1 {
    constructor(points) {
        this.hand = [];
        this.points = 0;
        this.tie = 0;
    }
}

class Player2 {
    constructor(points) {
        this.hand = [];
        this.points = 0;
        this.tie = 0;
    }
}

function shuffle(deckArray) {
    return deckArray.sort(
        () => Math.random() - 0.5);
}


let player1 = new Player1;
let player2 = new Player2;
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

for (const value in values) {
    for (const suit in suits) {
        deckOfCards.push(new Card(value, values[value], suits[suit]));
    }
}


deckOfCards = shuffle(deckOfCards);

const splitHalf = Math.floor(deckOfCards.length / 2);
player1.hand = deckOfCards.slice(0, splitHalf);
player2.hand = deckOfCards.slice(splitHalf);



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

if (player1.tie == 1) {
    console.log(`There was a tie ` + player1.tie + ' time')
} else if (player1.tie == 0) {
    console.log("There weren't any ties")
} else {
    console.log(`There was a tie ` + player1.tie + ' times')
}



if (player1.points > player2.points) {
    console.log('Player 1 wins wih a score of: ' + player1.points)
} else {
    console.log('Player 2 wins with a score of: ' + player2.points)
}

