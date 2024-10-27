import { assert } from "chai";
import { onlineStore } from "../onlineStore.js";

describe('Tests for onlineStore', () => {

    describe('Test isProductAvailable', () => {
        it('Should return when product is out of stock', () => {
            const actual = onlineStore.isProductAvailable('Trainers', 0);
            const expected = `Sorry, ${'Trainers'} is currently out of stock.`;

            assert.equal(actual, expected);
            assert.equal(onlineStore.isProductAvailable('Trainers', -1), expected);
        });

        it('Should return when product available', () => {
            const actual = onlineStore.isProductAvailable('Trainers', 1);
            const expected = `Great! ${'Trainers'} is available for purchase.`;

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid product', () => {
            assert.throws(() => onlineStore.isProductAvailable(2, 1));
            assert.throws(() => onlineStore.isProductAvailable(null, 1));
            assert.throws(() => onlineStore.isProductAvailable(undefined, 1));
        });

        it('Should throw error on invalid stock quantity', () => {
            assert.throws(() => onlineStore.isProductAvailable('Trainers', '1'));
            assert.throws(() => onlineStore.isProductAvailable('Trainers', null));
            assert.throws(() => onlineStore.isProductAvailable('Trainers', undefined));
        });
    });

    describe('Test canAffordProduct', () => {
        it('Should return when insuffiecient funds', () => {
            const actual = onlineStore.canAffordProduct(100, 90);
            const expected = 'You don\'t have sufficient funds to buy this product.';

            assert.equal(actual, expected);
        });

        it('Should return when product is bought', () => {
            const actual = onlineStore.canAffordProduct(100, 100);
            const expected = `Product purchased. Your remaining balance is $${0}.`

            assert.equal(actual, expected);
            assert.equal(onlineStore.canAffordProduct(100, 110), `Product purchased. Your remaining balance is $${10}.`);
        });

        it('Should throw erro on invalid prodcut price', () => {
            assert.throws(() => onlineStore.canAffordProduct('100', 110), 'Invalid input.');
            assert.throws(() => onlineStore.canAffordProduct(null, 110), 'Invalid input.');
            assert.throws(() => onlineStore.canAffordProduct(undefined, 110), 'Invalid input.');
        });

        it('Should throw erro on invalid account balance', () => {
            assert.throws(() => onlineStore.canAffordProduct(110, '100'), 'Invalid input.');
            assert.throws(() => onlineStore.canAffordProduct(110, null), 'Invalid input.');
            assert.throws(() => onlineStore.canAffordProduct(110, undefined), 'Invalid input.');
        });
    });

    describe('Test getRecommendedProducts', () => {
        it('Should return the matched products by criteria', () => {
            const productList = [
                { name: "Camera", category: 'Photography' },
                { name: "Cannon", category: 'Photography' },
                { name: "TV", category: 'Movies' },
            ];

            const actual = onlineStore.getRecommendedProducts(productList, 'Photography');
            const expected = `Recommended products in the ${'Photography'} category: ${'Camera, Cannon'}`;

            assert.equal(actual, expected);
        });

        it('Should return no matched products by criteria', () => {
            const productList = [
                { name: "Camera", category: 'Photography' },
                { name: "Cannon", category: 'Photography' },
                { name: "TV", category: 'Movies' },
            ];

            const actual = onlineStore.getRecommendedProducts(productList, 'MMA');
            const expected = `Sorry, we currently have no recommended products in the ${'MMA'} category.`;

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid products list', () => {
            assert.throws(() => onlineStore.getRecommendedProducts({ name: "Camera", category: 'Photography' }, 'MMA'), 'Invalid input.');
            assert.throws(() => onlineStore.getRecommendedProducts(null, 'MMA'), 'Invalid input.');
            assert.throws(() => onlineStore.getRecommendedProducts(undefined, 'MMA'), 'Invalid input.');
        });

        it('Should throw error on invalid category', () => {
            const productList = [
                { name: "Camera", category: 'Photography' },
                { name: "Cannon", category: 'Photography' },
                { name: "TV", category: 'Movies' },
            ];
            assert.throws(() => onlineStore.getRecommendedProducts(productList, ['MMA']), 'Invalid input.');
            assert.throws(() => onlineStore.getRecommendedProducts(productList, null), 'Invalid input.');
            assert.throws(() => onlineStore.getRecommendedProducts(productList, undefined), 'Invalid input.');
        });
    });

}); 