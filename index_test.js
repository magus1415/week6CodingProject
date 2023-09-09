var expect = chai.expect;


// describe('Week 6 Testing', function () {
//     describe('#Function', function () {
//         it('Should be equal to 6', function () {
//             var x = doSomething(5, 1);
//             expect(x).to.equal(7);
//         })
//     })
// })

// function doSomething(x, y) {
//     return x + y;
// };



describe('Week card class testing', function () {
    describe('Get card string test', function () {
        it('Should equal Ace of Clubs', function () {
            var c = new Card(14, 'Ace', 'Clubs');
            var cname = c.getCardString();
            expect(cname).to.equal('Ace of Clubs');
        });

        it('Should equal Clubs', function () {
            var c = new Card(14, 'Ace', 'Clubs');
            var cnumber = c.getCardSuit();
            expect(cnumber).to.equal('Clubs');
        });
    })
})




class Card {
    constructor(cardNumber, cardName, cardSuit) {
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardSuit = cardSuit;
    }

    getCardString() {
        return `${this.cardName} of ${this.cardSuit}`;
    }
    getCardSuit() {
        return this.cardSuit
    }

}
