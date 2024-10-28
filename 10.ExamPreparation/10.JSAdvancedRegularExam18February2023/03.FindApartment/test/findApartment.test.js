import { assert, expect } from "chai";
import { findNewApartment } from "../findApartment.js";


describe('Tests for findNewApartment', () => {

    describe('Test isGoodLocation', () => {
        it('Should return when location is not suitable', () => {
            const actual = findNewApartment.isGoodLocation('Ruse', true);
            const expected = 'This location is not suitable for you.';
            assert.equal(actual, expected);
        });

        it('Should return there is public transport', () => {
            const actual = findNewApartment.isGoodLocation('Sofia', true);
            const expected = 'You can go on home tour!';
            assert.equal(actual, expected);
        });

        it('Should return there is no public transport', () => {
            const actual = findNewApartment.isGoodLocation('Sofia', false);
            const expected = 'There is no public transport in area.';
            assert.equal(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], false), 'Invalid input!');
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], 1), 'Invalid input!');
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], null), 'Invalid input!');
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], undefined), 'Invalid input!');
        });
    });

    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
            const actual = findNewApartment.isLargeEnough([20, 30, 40, 50], 30);
            const expected = '30, 40, 50';

            assert.equal(actual, expected);
        });

        it('Should throw error on onvalid input', () => {
            assert.throws(() => findNewApartment.isLargeEnough('30, 40, 50', 30), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([], 30), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([20, 30, 40, 50], '30'), 'Invalid input!');
        });
    });

    describe('Test isItAffordable', () => {
        it('Should not be affordable', () => {
            const actual = findNewApartment.isItAffordable(200, 190);
            const expected = 'You don\'t have enough money for this house!';

            assert.equal(actual, expected);
        });

        it('Should be affordable', () => {
            const actual = findNewApartment.isItAffordable(200, 200);
            const expected = 'You can afford this home!';

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => findNewApartment.isItAffordable('200', 200));
            assert.throws(() => findNewApartment.isItAffordable(0, 200));
            assert.throws(() => findNewApartment.isItAffordable(-1, 200));
            assert.throws(() => findNewApartment.isItAffordable(200, '200'));
            assert.throws(() => findNewApartment.isItAffordable(200, 0));
            assert.throws(() => findNewApartment.isItAffordable(200, -1));
        });
    });
}); 