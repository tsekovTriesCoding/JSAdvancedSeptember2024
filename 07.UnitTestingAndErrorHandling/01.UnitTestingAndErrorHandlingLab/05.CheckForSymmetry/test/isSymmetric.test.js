import { expect } from "chai";
import { isSymmetric } from "../05.CheckForSymmetry.js";

describe('Test isSymmetric', () => {
    it('Should return false if input is not an array', () => {
        let input = 'string';

        const expected = isSymmetric(input);

        expect(expected).to.be.false;;
    });

    it('Should return true if input array is symmetrical', () => {
        let input = [1, 2, 1];

        const expected = isSymmetric(input);

        expect(expected).to.be.true;
    });

    it('Should return false if input array is not symmetrical', () => {
        let input = [1, 2, 2];

        const expected = isSymmetric(input);

        expect(expected).to.be.false;
    });

    it('Should return false if input is an symmetrical string', () => {
        let input = '12221';

        const expected = isSymmetric(input);

        expect(expected).to.be.false;
    });

    it('Should return false if one of the elements is different type', () => {
        let input = [1, 2, '1'];

        const expected = isSymmetric(input);

        expect(expected).to.be.false;
    });
});