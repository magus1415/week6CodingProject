// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.



// shuffle(deckOfCards);
// console.log(deckOfCards);

class War {
    constructor() {
        this.deckOfCards = [];
        this.player1 = new Player1();
        this.player2 = new Player2();
    }

    playGame() {
        for (let i = 1; i <= 52; i++) {
            this.deckOfCards.push(i);
        }
        //this will loop through the 52 iterations of number represented as cards and push the to the array

        function shuffle(deckArray) {
            return deckArray.sort(() => Math.random() - 0.5);
        };

        this.deckOfCards = shuffle(this.deckOfCards);
        const splitHalf = Math.floor(this.deckOfCards.length / 2);
        this.player1.hand = this.deckOfCards.slice(0, splitHalf);
        this.player2.hand = this.deckOfCards.slice(splitHalf);
        
        for (let i = 0; i < this.player1.hand.length; i++) {
            if (this.player1.hand[i] > this.player2.hand[i]) {
                this.player1.points = this.player1.points + 1;
                // console.log('Round ' + (i + 1) + ') ' + 'Player 1 wins') //display if player1 wins
            } else if (this.player2.hand[i] > this.player1.hand[i]) {
                this.player2.points = this.player2.points + 1;
                // console.log('Round ' + (i + 1) + ') ' + 'Player 2 wins') //display if player2 wins
            } else {
                console.log('It is a tie!')
            }
        }

        if (this.player1.points > this.player2.points) {
            console.log('Player 1 wins wih a score of: ' + this.player1.points)
        } else {
            console.log('Player 2 wins with a score of: ' + this.player2.points)
        }
    }

}

class Player1 {
    constructor(points) {
        this.hand = [];
        this.points = 0;
    }
}

class Player2 {
    constructor(points) {
        this.hand = [];
        this.points = 0;
    }
}

let game = new War;
game.playGame();



















