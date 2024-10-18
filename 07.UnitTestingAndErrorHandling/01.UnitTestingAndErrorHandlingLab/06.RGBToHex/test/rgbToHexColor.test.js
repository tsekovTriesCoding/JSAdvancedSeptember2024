import { expect } from "chai";
import { rgbToHexColor } from "../06.RGBTtoHex.js";

describe('Test rgbToHexColor', () => {
    it('Should return undefined when not all arguments are passed', () => {
        const expected1 = rgbToHexColor(2);
        const expected2 = rgbToHexColor(2, 2);

        expect(expected1).to.be.undefined;
        expect(expected2).to.be.undefined;
    });

    it('Should return undefined when color values are out of lower range', () => {
        const expected1 = rgbToHexColor(-2, 2, 2);
        const expected2 = rgbToHexColor(2, -2, 2);
        const expected3 = rgbToHexColor(2, 2, -2);

        expect(expected1).to.be.undefined;
        expect(expected2).to.be.undefined;
        expect(expected3).to.be.undefined;
    });

    it('Should return undefined when color values are out of upper range', () => {
        const expected1 = rgbToHexColor(260, 2, 2);
        const expected2 = rgbToHexColor(2, 260, 2);
        const expected3 = rgbToHexColor(2, 2, 260);

        expect(expected1).to.be.undefined;
        expect(expected2).to.be.undefined;
        expect(expected3).to.be.undefined;
    });

    it('Should return undefined when color values are other than integer', () => {
        const expected1 = rgbToHexColor('str', 2, 2);
        const expected2 = rgbToHexColor([2, 260, 2]);
        const expected3 = rgbToHexColor({ 1: 2 });
        const expected4 = rgbToHexColor('1', '2');
        const expected5 = rgbToHexColor(2.5);

        expect(expected1).to.be.undefined;
        expect(expected2).to.be.undefined;
        expect(expected3).to.be.undefined;
        expect(expected4).to.be.undefined;
        expect(expected5).to.be.undefined;
    });

    it('Should return black color', () => {
        const expected = rgbToHexColor(0, 0, 0);
        const actual = '#000000';

        expect(expected).to.equal(actual);
    });

    it('Should return white color', () => {
        const expected = rgbToHexColor(255, 255, 255);
        const actual = '#FFFFFF';

        expect(expected).to.equal(actual);
    });
});