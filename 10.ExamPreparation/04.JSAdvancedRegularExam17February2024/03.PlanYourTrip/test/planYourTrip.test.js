import { assert } from "chai";
import { planYourTrip } from "../planYourTrip.js";

describe('Tests for planYoutTrip', () => {

    describe('Test choosingDestination', () => {
        it('Should throw error on invalid year', () => {
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023), `Invalid Year!`);
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', null), `Invalid Year!`);
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', undefined), `Invalid Year!`);
        });

        it('Should throw error on invalid destination', () => {
            assert.throws(() => planYourTrip.choosingDestination('Miami', 'Winter', 2024), `This destination is not what you are looking for.`);
            assert.throws(() => planYourTrip.choosingDestination(0, 'Winter', 2024), `This destination is not what you are looking for.`);
        });

        it('Should choose destination in winter season', () => {
            const actual = planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024);
            const expected = `Great choice! The ${'Winter'} is the perfect time to visit the ${'Ski Resort'}.`;

            assert.equal(actual, expected);
        });

        it('Should choose destination in other than winter season', () => {
            const actual = planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024);
            const expected = `Consider visiting during the Winter for the best experience at the ${'Ski Resort'}.`;

            assert.equal(actual, expected);
        });

        describe('Test exploreOptions', () => {
            it('Should throw error on invalid activities', () => {
                assert.throws(() => planYourTrip.exploreOptions('some strting any', 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions({ 'name': 'name' }, 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(null, 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(undefined, 1), 'Invalid Information!');
            });

            it('Should throw error on invalid activityIndex', () => {
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], 1.5), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], -1), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], 3), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], 4), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], 'a'), 'Invalid Information!');
                assert.throws(() => planYourTrip.exploreOptions(['act1', 'act2', 'act3'], [1]), 'Invalid Information!');
            });

            it('Should remove activity at the given index', () => {
                const actual = planYourTrip.exploreOptions(['act1', 'act2', 'act3'], 0);
                const expected = `act2, act3`;

                assert.equal(actual, expected);
                assert.equal(planYourTrip.exploreOptions(['act1'], 0), '');
                assert.equal(planYourTrip.exploreOptions(['act1', 'act2'], 1), 'act1');

            });
        });

        describe('Test estimateExpenses', () => {
            it('Should throw error on invalid distanceInKilometers', () => {
                assert.throws(() => planYourTrip.estimateExpenses('1', 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses([1], 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses(0, 1), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses(-1, 1), 'Invalid Information!');
            });

            it('Should throw error on invalid fuelCostPerLiter', () => {
                assert.throws(() => planYourTrip.estimateExpenses(1, '1'), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses(1, [1]), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses(1, 0), 'Invalid Information!');
                assert.throws(() => planYourTrip.estimateExpenses(1, -1), 'Invalid Information!');
            });

            it('Should estimate expences < 500', () => {
                const actual = planYourTrip.estimateExpenses(10, 10);
                const expected = `The trip is budget-friendly, estimated cost is $${'100.00'}.`;

                assert.equal(actual, expected);
            });

            it('Should estimate expences = 500', () => {
                const actual = planYourTrip.estimateExpenses(100, 5);
                const expected = `The trip is budget-friendly, estimated cost is $${'500.00'}.`;

                assert.equal(actual, expected);
            });

            it('Should estimate expences for a normal trip', () => {
                const actual = planYourTrip.estimateExpenses(1000, 10);
                const expected = `The estimated cost for the trip is $${'10000.00'}, plan accordingly.`;
                assert.equal(actual, expected);
            });
        });
    });
});