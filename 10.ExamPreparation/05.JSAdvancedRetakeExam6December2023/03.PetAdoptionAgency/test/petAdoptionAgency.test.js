import { assert } from "chai";
import { petAdoptionAgency } from "../petAdoptionAgency.js";

describe('Test petAdoptionAgency', () => {

    describe('Tests for isPetAvailable', () => {

        it('Should return no available pets on 0 or negative availableCount', () => {
            const expected = `Sorry, there are no ${'Dog'}(s) available for adoption at the agency.`;
            assert.equal(petAdoptionAgency.isPetAvailable('Dog', 0, false), expected);
            assert.equal(petAdoptionAgency.isPetAvailable('Dog', -1, false), expected);
        });

        it('Should return unvaccinated pets', () => {
            const actual = petAdoptionAgency.isPetAvailable('Dog', 2, false);
            const expected = `Great! We have ${2} ${'Dog'}(s) available for adoption, but they need vaccination.`;

            assert.equal(actual, expected);
        });

        it('Should return vaccinated pets', () => {
            const actual = petAdoptionAgency.isPetAvailable('Dog', 2, true);
            const expected = `Great! We have ${2} vaccinated ${'Dog'}(s) available for adoption at the agency.`;

            assert.equal(actual, expected);
        });

        it('should throw exception on invalid input', () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable(['Dog'], 2, true));
            assert.throws(() => petAdoptionAgency.isPetAvailable(null, 2, true));
            assert.throws(() => petAdoptionAgency.isPetAvailable(undefined, 2, true));
            assert.throws(() => petAdoptionAgency.isPetAvailable('Dog', '2', true));
            assert.throws(() => petAdoptionAgency.isPetAvailable('Dog', 2, 'true'));
        });
    });

    describe('Tests for getRecommendedPets', () => {
        it('Should return pets with the wanted traits', () => {
            const actual = petAdoptionAgency.getRecommendedPets([{ name: 'Dog', traits: 'barks' }, { name: 'Cat', traits: 'meows' }], 'meows');
            const expected = `Recommended pets with the desired traits (${'meows'}): ${'Cat'}`;

            assert.equal(actual, expected);
        });

        it('Should return no pets when traits are not matching', () => {
            const actual = petAdoptionAgency.getRecommendedPets([{ name: 'Dog', traits: 'barks' }, { name: 'Cat', traits: 'meows' }], 'jumps');
            const expected = `Sorry, we currently have no recommended pets with the desired traits: ${'jumps'}.`;

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid petList', () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets({ name: 'Dog', traits: 'barks' }, 'meows'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets(undefined, 'meows'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets(null, 'meows'), 'Invalid input');
        });

        it('Should throw error on invalid desiredTraits', () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: 'Dog', traits: 'barks' }, { name: 'Cat', traits: 'meows' }], 2), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: 'Dog', traits: 'barks' }, { name: 'Cat', traits: 'meows' }], null), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: 'Dog', traits: 'barks' }, { name: 'Cat', traits: 'meows' }], undefined), 'Invalid input');
        });
    });

    describe('Tests for adoptPet', () => {
        it('Should adopt pet', () => {
            const actual = petAdoptionAgency.adoptPet('Dog', 'Tony');
            const expected = `Congratulations, ${'Tony'}! You have adopted ${'Dog'} from the agency. Enjoy your time with your new furry friend!`;

            assert.equal(actual, expected);
        });

        it('Should adopt throw error on invalid input', () => {
            assert.throws(() => petAdoptionAgency.adoptPet(['Dog'], 'Tony'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet(null, 'Tony'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet(undefined, 'Tony'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet('Dog', ['Tony']), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet('Dog', null), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet('Dog', undefined), 'Invalid input');
        });
    });
}); 