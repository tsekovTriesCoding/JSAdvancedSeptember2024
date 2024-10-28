import { assert } from "chai";
import { recipeSelection } from "../recipeSelection.js";

describe('Tests for recipeSelection', () => {

    describe('Test isTypeSuitable', () => {
        it('Should return not suitable for vegetarians', () => {
            const actual = recipeSelection.isTypeSuitable('Meat', 'Vegetarian');
            const expected = 'This recipe is not suitable for vegetarians';

            assert.equal(actual, expected);
        });

        it('Should return not suitable for vegans', () => {
            const actual1 = recipeSelection.isTypeSuitable('Meat', 'Vegan');
            const actual2 = recipeSelection.isTypeSuitable('Dairy', 'Vegan');
            const expected = 'This recipe is not suitable for vegans';

            assert.equal(actual1, expected);
            assert.equal(actual2, expected);
        });

        it('Should return no dietary restriction', () => {
            const actual = recipeSelection.isTypeSuitable('Dairy', 'Normal');
            const expected = 'This recipe is suitable for your dietary restriction';

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => recipeSelection.isTypeSuitable(['Meat'], 'Vegan'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable(1, 'Vegan'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable(null, 'Vegan'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable(undefined, 'Vegan'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('Meat', ['Vegan']), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('Meat', 1), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('Meat', null), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('Meat', undefined), 'Invalid input');
        });
    });

    describe('Test isItAffordable', () => {
        it('Should not be affordable on budget < 0', () => {
            const actual = recipeSelection.isItAffordable(110, 100);
            const expected = 'You don\'t have enough budget to afford this recipe';

            assert.equal(actual, expected);
        });

        it('Should buy the ingredients', () => {
            const actual = recipeSelection.isItAffordable(100, 200);
            const expected = `Recipe ingredients bought. You have ${100}$ left`;

            assert.equal(actual, expected);
        });

        it('Should buy the ingredients and budget left is 0', () => {
            const actual = recipeSelection.isItAffordable(100, 100);
            const expected = `Recipe ingredients bought. You have ${0}$ left`;

            assert.equal(actual, expected);
        });

        it('Should throw erron on invalid input', () => {
            assert.throws(() => recipeSelection.isItAffordable('100', 200), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(null, 200), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(undefined, 200), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(100, '200'), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(100, null), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(100, undefined), 'Invalid input');
        });
    });

    describe('Test getRecipesByCategory', () => {
        it('Should return array of recipes titles that match the category', () => {
            const recipes = [
                { title: 'Spicy Tofu Stir-Fry', category: 'Asian' },
                { title: 'Fries', category: 'French' },
                { title: 'Chinese Rice', category: 'Asian' }
            ];

            const actual = recipeSelection.getRecipesByCategory(recipes, 'Asian');
            const expected = ['Spicy Tofu Stir-Fry', 'Chinese Rice'];

            assert.deepEqual(actual, expected);
        });

        it('Should return empty array if no recipes match the category', () => {
            const recipes = [
                { title: 'Spicy Tofu Stir-Fry', category: 'Asian' },
                { title: 'Fries', category: 'French' },
                { title: 'Chinese Rice', category: 'Asian' }
            ];

            const actual = recipeSelection.getRecipesByCategory(recipes, 'Mekitsi');
            const expected = [];

            assert.deepEqual(actual, expected);
        });

        it('Should throw error on invalid input', () => {
            assert.throws(() => recipeSelection.getRecipesByCategory({ title: 'Spicy Tofu Stir-Fry', category: 'Asian' }, 'Asian'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory(null, 'Asian'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory(undefined, 'Asian'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory(123, 'Asian'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([], { Asian: 'asian' }), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([], null), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([], undefined), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([], 1), 'Invalid input');
        });
    });
}); 