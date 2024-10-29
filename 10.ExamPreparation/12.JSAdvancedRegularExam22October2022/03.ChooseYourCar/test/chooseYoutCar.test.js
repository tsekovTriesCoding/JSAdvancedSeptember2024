import { assert } from "chai";
import { chooseYourCar } from "../chooseYourCar.js";

describe('Tests for chooseYourCar', () => {
    describe('Test SchoosingType', () => {
        it('Should throw error on invalid year', () => {
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'Blue', 1899), `Invalid Year!`);
            assert.throws(() => chooseYourCar.choosingType('Sedan', 'Blue', 2023), `Invalid Year!`);
        });

        it('Should throw error on type', () => {
            assert.throws(() => chooseYourCar.choosingType('Hatchback', 'Blue', 2000), `This type of car is not what you are looking for.`);
        });

        it('Should meet you requirments for a car', () => {
            const actual = chooseYourCar.choosingType('Sedan', 'Blue', 2020);
            const expected = `This ${'Blue'} ${'Sedan'} meets the requirements, that you have.`;

            assert.equal(actual, expected);
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2010), expected);
        });

        it('Should not meet you requirments for a car', () => {
            const actual = chooseYourCar.choosingType('Sedan', 'Blue', 2008);
            const expected = `This ${'Sedan'} is too old for you, especially with that ${'Blue'} color.`;

            assert.equal(actual, expected);
        });
    });

    describe('Test brandName', () => {
        it('Should throw error on invalid input', () => {
            assert.throws(() => chooseYourCar.brandName('BMW, Mercedes', 1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Mercedes'], 1.5), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Mercedes'], '1'), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Mercedes'], -1), 'Invalid Information!');
            assert.throws(() => chooseYourCar.brandName(['BMW', 'Mercedes'], 2), 'Invalid Information!');
        });

        it('Should return the correct brands', () => {
            const actual = chooseYourCar.brandName(['BMW', 'Mercedes', 'Audi', 'Opel'], 3);
            const expected = 'BMW, Mercedes, Audi';

            assert.equal(actual, expected);
        });
    });

    describe('Test carFuelConsumption', () => {
        it('Should throw error on invalid input', () => {
            assert.throws(() => chooseYourCar.carFuelConsumption('1', 2), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(0, 2), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(-1, 2), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, '1'), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 0), 'Invalid Information!');
            assert.throws(() => chooseYourCar.carFuelConsumption(1, -1), 'Invalid Information!');
        });

        it('Should return an efficient car', () => {
            const actual = chooseYourCar.carFuelConsumption(100, 6);
            const expected = `The car is efficient enough, it burns 6.00 liters/100 km.`;

            assert.equal(actual, expected);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns 7.00 liters/100 km.`);
        });

        it('Should return an non efficient car', () => {
            const actual = chooseYourCar.carFuelConsumption(100, 10);
            const expected = `The car burns too much fuel - 10.00 liters!`;

            assert.equal(actual, expected);
        });
    });
});
