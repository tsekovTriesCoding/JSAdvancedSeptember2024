function printDeckOfCards(cards) {
    function createCard(cardFace, cardSuit) {
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

        if (!validCardFaces.includes(cardFace) || !validCardSuits.hasOwnProperty(cardSuit)) {
            throw new Error('Error');
        }

        return new Card(cardFace, validCardSuits[cardSuit]);
    }

    const deck = [];
    let hasInvalidCard = false;
    cards.forEach(card => {
        const cardInfo = card.split('');
        const cardSuit = cardInfo.pop();
        const cardFace = cardInfo.join('');
        try {
            const card = createCard(cardFace, cardSuit)
            deck.push(card);
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            hasInvalidCard = true;
            return;
        }
    });

    if (!hasInvalidCard) {
        console.log(deck.join(' '));
    }
}
// printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);