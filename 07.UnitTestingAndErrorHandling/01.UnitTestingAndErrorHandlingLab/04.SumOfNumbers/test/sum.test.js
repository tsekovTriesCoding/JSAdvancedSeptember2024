import { expect } from "chai";
import { sum } from "../04.SumOfNumbers.js";

describe('Check Sum', () => {
    it('Should return the sum of multiple numbers', () => {
        let input = [1, 2, 3, 4];
        const expectedSum = 10;

        const actualSum = sum(input);

        expect(expectedSum).to.equal(actualSum);
    });

    it('Should return the sum of single number in array', () => {
        let input = [1];
        const expectedSum = 1;

        const actualSum = sum(input);

        expect(expectedSum).to.equal(actualSum);
    });

    it('Should return 0', () => {
        let input = [0, 0, 0];
        const actual = sum(input);

        expect(0).to.equal(actual);
    });
});