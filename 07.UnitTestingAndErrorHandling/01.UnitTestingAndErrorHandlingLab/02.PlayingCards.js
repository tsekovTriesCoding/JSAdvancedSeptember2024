function solve(cardFace, cardSuit) {
    class Card {
        cardFace;
        cardSuit

        constructor(cardFace, cardSuit) {
            this.cardFace = cardFace;
            this.cardSuit = cardSuit
        }

        toString() {
            return this.cardFace + this.cardSuit;
        }
    }

    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = {
        S: '♠', H: '♥', D: '♦', C: '♣',
    }

    if (!validCardFaces.includes(cardFace)) {
        throw new Error('Error');
    }

    return new Card(cardFace, validCardSuits[cardSuit]);
}

const res = solve('1', 'C');
console.log(res.toString());
