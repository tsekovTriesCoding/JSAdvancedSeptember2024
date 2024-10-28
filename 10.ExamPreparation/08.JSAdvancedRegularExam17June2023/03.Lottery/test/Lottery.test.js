import { assert } from "chai";
import { lottery } from "../Lottery.js";

describe("Tests for lottery", () => {

    describe('Test buyLotteryTicket', () => {
        it('Should throw error on invalid input', () => {
            assert.throws(() => lottery.buyLotteryTicket(0, 2, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(-1, 2, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket('2', 2, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(2, 0, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(2, -1, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(2, '1', true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(2, 2, 'true'), 'Invalid input!');
        });

        it('Should throw error when buy is false', () => {
            assert.throws(() => lottery.buyLotteryTicket(2, 2, false), 'Unable to buy lottery ticket!');
        });

        it('Should buy ticket', () => {
            const actual = lottery.buyLotteryTicket(2, 2, true);
            const expected = `You bought ${2} tickets for ${4}$.`;

            assert.equal(actual, expected);
        });
    });

    describe('Test checkTicket', () => {
        it('Should throw error on invalid input', () => {
            assert.throws(() => lottery.checkTicket('1 2 3', []), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]), 'Invalid input!');
        });

        it('Should get reward when guessed number are between 3 and 6', () => {
            const actual = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]);
            const expected = 'Congratulations you win, check your reward!';

            assert.equal(actual, expected);
        });

        it('Should win the Jackpot', () => {
            const actual = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
            const expected = 'You win the JACKPOT!!!';

            assert.equal(actual, expected);
        });
    });

    describe('Test secondChance', () => {
        it('Should throw error on invalid input', () => {
            assert.throws(() => lottery.secondChance('1', []), 'Invalid input!');
            assert.throws(() => lottery.secondChance(null, []), 'Invalid input!');
            assert.throws(() => lottery.secondChance(undefined, []), 'Invalid input!');
            assert.throws(() => lottery.secondChance(1, '1 , 2 , 3'), 'Invalid input!');
        });

        it('Should win on second chance', () => {
            const actual = lottery.secondChance(1, [1, 2]);
            const expected = 'You win our second chance prize!';

            assert.equal(actual, expected);
        });

        it('Should not win second chance prize', () => {
            const actual = lottery.secondChance(1, [2, 3, 5]);
            const expected = 'Sorry, your ticket didn\'t win!';

            assert.equal(actual, expected);
        });
    });
}); 