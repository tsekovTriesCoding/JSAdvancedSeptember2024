import { assert } from "chai";
import { weddingDay } from "../weddingDay.js";

describe('Tests for weddingDay', function () {

    describe('Test PickVenue', function () {
        it('Should throw exception on invalid capacity', function () {
            assert.throws(() => weddingDay.pickVenue('1', 1, 'Varna'), 'Invalid Information!');
        });

        it('Should throw exception on invalid price per guest', function () {
            assert.throws(() => weddingDay.pickVenue(1, '1', 'Varna'), 'Invalid Information!');
        });

        it('Should throw exception on invalid location', function () {
            assert.throws(() => weddingDay.pickVenue(1, 1, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(1, 1, ''), 'Invalid Information!');
        });

        it('Should throw exception if location is not Varna', function () {
            assert.throws(() => weddingDay.pickVenue(1, 1, 'Sofia'), `The location of this venue is not in the correct area!`);
        });

        it('Should return that conditions are not met on invalid capacity', () => {
            const expectedMessage = `This venue does not meet your requirements!`;
            const actualMessage = weddingDay.pickVenue(149, 120, 'Varna');
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should return that conditions are not met on invalid price per guest', () => {
            const expectedMessage = `This venue does not meet your requirements!`;
            const actualMessage = weddingDay.pickVenue(151, 121, 'Varna');
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should work with valid input', () => {
            const expectedMessage = `This venue meets the requirements, with capacity of ${151} guests and ${120}$ cover.`;
            const actualMessage = weddingDay.pickVenue(151, 120, 'Varna');
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('Test otherSpendings', () => {
        it('Should throw exception on invalid wedding decoration', function () {
            assert.throws(() => weddingDay.otherSpendings('1', [], true), 'Invalid Information!');
        });

        it('Should throw exception on invalid photography', function () {
            assert.throws(() => weddingDay.otherSpendings([], 1, true), 'Invalid Information!');
        });

        it('Should throw exception on invalid discount', function () {
            assert.throws(() => weddingDay.otherSpendings([], [], 1), 'Invalid Information!');
        });

        it('Should calculate price1', () => {
            const expectedMessage = `You spend ${1200}$ for wedding decoration and photography!`;
            const actualMessage = weddingDay.otherSpendings(['flowers'], ['pictures'], false);
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should calculate price2', () => {
            const expectedMessage = `You spend ${1700}$ for wedding decoration and photography!`;
            const actualMessage = weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false);
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should calculate zero price with invalid decoration and photography', () => {
            const expectedMessage = `You spend ${0}$ for wedding decoration and photography!`;
            const actualMessage = weddingDay.otherSpendings(['wrong'], ['wrong'], false);
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should calculate price with discount', () => {
            const expectedMessage = `You spend ${1700 * 0.85}$ for wedding decoration and photography with 15% discount!`;
            const actualMessage = weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true);
            assert.equal(expectedMessage, actualMessage);
        });
    });

    describe('tableDistribution', () => {
        it('Should throw exception on invalid guests', function () {
            assert.throws(() => weddingDay.tableDistribution('1', 1), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(0, 1), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(-1, 1), 'Invalid Information!');
        });

        it('Should throw exception on invalid tables', function () {
            assert.throws(() => weddingDay.tableDistribution(1, '1'), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(1, 0), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(1, -1), 'Invalid Information!');
        });

        it('Should return guests less than 6 per table', () => {
            const expectedMessage = `There is only ${5} people on every table, you can join some tables.`;
            const actualMessage = weddingDay.tableDistribution(10, 2);
            assert.equal(expectedMessage, actualMessage);
        });

        it('Should return guests when they are more than or equal to 6 per table', () => {
            const expectedMessage = `You have ${2} tables with ${10} guests on table.`;
            const actualMessage = weddingDay.tableDistribution(20, 2);
            assert.equal(expectedMessage, actualMessage);
        });
    });
}); 