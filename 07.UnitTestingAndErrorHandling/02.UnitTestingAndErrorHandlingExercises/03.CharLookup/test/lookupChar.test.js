import { expect } from "chai";;
import { lookupChar } from "../03.CharLookup.js";

describe('Test lookupChar', () => {
    it('Should return undefined if invalid argument is passed', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('string', 2.5)).to.be.undefined;
    });

    it('Should return uncorrect index if index is out of bounds', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    });

    it('Should return correct char at given index', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 5)).to.equal('g');
    });
});