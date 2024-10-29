import { assert } from "chai";
import { motorcycleRider } from "../MotorcycleRider.js";

describe('Tests for motorcycleRider', () => {
    describe('Test licenseRestriction', () => {
        it('Should return for category AM', () => {
            const actual = motorcycleRider.licenseRestriction('AM');
            const expected = 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.';

            assert.equal(actual, expected);
        });

        it('Should return for category A1', () => {
            const actual = motorcycleRider.licenseRestriction('A1');
            const expected = 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.';

            assert.equal(actual, expected);
        });

        it('Should return for category A2', () => {
            const actual = motorcycleRider.licenseRestriction('A2');
            const expected = 'Motorcycles with maximum power of 35KW. and the minimum age is 18.';

            assert.equal(actual, expected);
        });

        it('Should return for category A', () => {
            const actual = motorcycleRider.licenseRestriction('A');
            const expected = 'No motorcycle restrictions, and the minimum age is 24.';

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => motorcycleRider.licenseRestriction('B'), 'Invalid Information!');
        });
    });

    describe('Test motorcycleShowroom', () => {
        it('Should return available bikes by engine volume', () => {
            const actual = motorcycleRider.motorcycleShowroom([50, 60, 70, 80], 60);
            const expected = `There are ${2} available motorcycles matching your criteria!`;

            assert.equal(actual, expected);
        });

        it('Should throw erro on invalid input', () => {
            assert.throws(() => motorcycleRider.motorcycleShowroom('50, 60 ,70', 60), 'Invalid Information!');
            assert.throws(() => motorcycleRider.motorcycleShowroom([50, 60, 70, 80], '60'), 'Invalid Information!');
            assert.throws(() => motorcycleRider.motorcycleShowroom([50, 60, 70, 80], 49), 'Invalid Information!');
            assert.throws(() => motorcycleRider.motorcycleShowroom([], '60'), 'Invalid Information!');
        });
    });

    describe('Test otherSpendings', () => {
        it('Should calculate total price without discount', () => {
            const actual = motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false);
            const totalPrice = 600;
            const expected = `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`;

            assert.equal(actual, expected);
        });

        it('Should calculate total price with discount', () => {
            const actual = motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true);
            const totalPrice = 540;
            const expected = `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => motorcycleRider.otherSpendings('helmet, jacked', ['engine oil', 'oil filter'], true), 'Invalid Information!');
            assert.throws(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil,oil filter', true), 'Invalid Information!');
            assert.throws(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 'true'), 'Invalid Information!');
        });
    });
});