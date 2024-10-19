import { expect } from "chai";
import { isOddOrEven } from "../02.EvenOrOdd.js";

describe('Test isOddOrEven', () => {
    it('Should return undefined if other than string s passed', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(['string'])).to.be.undefined;
        expect(isOddOrEven({ name: 'string' })).to.be.undefined;
    });

    it('Should return even if string with even length is passed', () => {
        expect(isOddOrEven('string')).to.equal('even');
    });

    it('Should return odd if string with odd length is passed', () => {
        expect(isOddOrEven('strin')).to.equal('odd');
    });

    it('Should work correctly with different strings', () => {
        expect(isOddOrEven('strin')).to.equal('odd');
        expect(isOddOrEven('1')).to.equal('odd');
        expect(isOddOrEven('string')).to.equal('even');
        expect(isOddOrEven('11')).to.equal('even');
    });
});