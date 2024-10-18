import { expect } from "chai";
import { createCalculator } from "../07.AddSubtract.js";

describe('Test createCalculator', () => {
    it('Should add sum', () => {
        const calc = createCalculator();
        const expected = calc.get();
    
        calc.add(2);
        const expected1 = calc.get();
        calc.add('2');
        const expected2 = calc.get();

        expect(expected).to.equal(0);
        expect(expected1).to.equal(2);
        expect(expected2).to.equal(4);
    });

    it('Should return NaN on invalid add input', () => {
        const calc = createCalculator();
        calc.add('str');
        
        const expected1 = calc.get();
        expect(expected1).to.be.NaN;
    });

    it('Should subtract sum', () => {
        const calc = createCalculator();
        const expected = calc.get();
    
        calc.subtract(2);
        const expected1 = calc.get();
        calc.subtract('2');
        const expected2 = calc.get();

        expect(expected).to.equal(0);
        expect(expected1).to.equal(-2);
        expect(expected2).to.equal(-4);
    });

    it('Should return NaN on invalid subtract input', () => {
        const calc = createCalculator();
        calc.subtract('str');
        
        const expected1 = calc.get();
        expect(expected1).to.be.NaN;
    });
});