import { expect } from "chai";
import { mathEnforcer } from "../04.MathEnforcer.js";

describe('Test mathEnforcer', () => {
    describe('addFive', function () {
        it('Should return undefined in not a number is passed', function () {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
            expect(mathEnforcer.addFive({ name: 'string' })).to.be.undefined;
        });

        it('Should return correct sum', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('Should return undefined in not a number is passed', function () {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
            expect(mathEnforcer.subtractTen({ name: 'string' })).to.be.undefined;
        });

        it('Should return correct sum', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('sum', function () {
        it('Should return undefined in not a number is passed', function () {
            expect(mathEnforcer.sum('string', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, 'string')).to.be.undefined;
            expect(mathEnforcer.sum({ name: 'string' })).to.be.undefined;
        });

        it('Should return correct sum', function () {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
            expect(mathEnforcer.sum(10.2, 12.3)).to.be.closeTo(22.5, 0.01);
        });
    });
});