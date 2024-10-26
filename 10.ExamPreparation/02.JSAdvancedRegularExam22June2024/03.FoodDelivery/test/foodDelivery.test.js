import { assert } from "chai";
import { foodDelivery } from "../foodDelivery.js";

describe('Test foodDelivery', () => {

    describe('Test getCategory', () => {
        it('Should return text on Vegan category', () => {
            const actualMessage = foodDelivery.getCategory('Vegan');
            const expectedMessage = 'Dishes that contain no animal products.';

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should return text on Vegetarian category', () => {
            const actualMessage = foodDelivery.getCategory('Vegetarian');
            const expectedMessage = 'Dishes that contain no meat or fish.';

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should return text on Gluten-Free category', () => {
            const actualMessage = foodDelivery.getCategory('Gluten-Free');
            const expectedMessage = 'Dishes that contain no gluten.';

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should return text on All category', () => {
            const actualMessage = foodDelivery.getCategory('All');
            const expectedMessage = 'All available dishes.';

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should throw error on invalid category', () => {
            assert.throws(() => foodDelivery.getCategory('Dairy-Free'), 'Invalid Category!');
            assert.throws(() => foodDelivery.getCategory(['All']), 'Invalid Category!');
            assert.throws(() => foodDelivery.getCategory({ 'All': 'All' }), 'Invalid Category!');
        });
    });

    describe('Test addMenuItem', () => {
        it('Should return items for the given criteria max price', () => {
            const actualMessage = foodDelivery.addMenuItem([{ name: 'food', price: 5 }, { name: 'food1', price: 6 }, { name: 'food3', price: 7 }], 6);
            const expectedMessage = `There are ${2} available menu items matching your criteria!`;

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should throw error on invalid menuItem', () => {
            assert.throws(() => foodDelivery.addMenuItem('foods', 7), 'Invalid Information!');
        });

        it('Should throw error on invalid type of maxPrice', () => {
            assert.throws(() => foodDelivery.addMenuItem([{ name: 'food', price: 5 }, { name: 'food1', price: 6 }, { name: 'food3', price: 7 }]
                , '7'), 'Invalid Information!');
        });

        it('Should throw error on empty menuItem', () => {
            assert.throws(() => foodDelivery.addMenuItem([], '7'), 'Invalid Information!');
        });

        it('Should throw error on maxPrice lower than 5', () => {
            assert.throws(() => foodDelivery.addMenuItem([{ name: 'food', price: 5 }, { name: 'food1', price: 6 }, { name: 'food3', price: 7 }]
                , 4), 'Invalid Information!');
        });
    });

    describe('Test calculateOrderCost', () => {
        it('Should return total price without discount', () => {
            const actualMessage = foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false);
            const expectedMessage = `You spend $${12.5.toFixed(2)} for shipping and addons!`;

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should return total price with discount', () => {
            const actualMessage = foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true);
            const expectedMessage = `You spend $${(12.5 * 0.85).toFixed(
                2
            )} for shipping and addons with a 15% discount!`;

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should throw error on invalid shipping type', () => {
            assert.throws(() => foodDelivery.calculateOrderCost('wrong type', [], true), 'Invalid Information!');
        });

        it('Should throw error on invalid addons type', () => {
            assert.throws(() => foodDelivery.calculateOrderCost([], 'wrong type', true), 'Invalid Information!');
        });

        it('Should throw error on invalid discount type', () => {
            assert.throws(() => foodDelivery.calculateOrderCost([], [], 15), 'Invalid Information!');
            assert.throws(() => foodDelivery.calculateOrderCost([], [], '15%'), 'Invalid Information!');
        });
    });
}); 