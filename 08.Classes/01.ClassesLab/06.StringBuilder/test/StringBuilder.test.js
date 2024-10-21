import { expect, assert } from "chai";
import { StringBuilder } from "../06.StringBuilder.js";

describe('Test class constructor', () => {
    it('Should return new instance of the class with given string', () => {
        const sb = new StringBuilder('hello');

        expect(sb.toString()).to.be.equal('hello');
    });

    it('Should return new empty string if nothing is passed to constructor', () => {
        const sb = new StringBuilder();

        expect(sb.toString()).to.be.equal('');
    });
});

describe('Test append function', () => {
    it('Should return new string with appended given value', () => {
        const sb = new StringBuilder('hello');
        sb.append(', there');
        expect(sb.toString()).to.be.equal('hello, there');
    });

    it('Should throw error when not a string is passed as argument', () => {
        const sb = new StringBuilder('hello');
        expect(() => sb.append(1)).to.throw(TypeError, 'Argument must be a string');
    });
});

describe('Test preppend function', () => {
    it('Should return new string with preppended given value', () => {
        const sb = new StringBuilder('hello');
        sb.prepend('User, ');
        expect(sb.toString()).to.be.equal('User, hello');
    });

    it('Should throw error when not a string is passed as argument', () => {
        const sb = new StringBuilder('hello');
        expect(() => sb.prepend(1)).to.throw(TypeError, 'Argument must be a string');
    });
});

describe('Test insertAt function', () => {
    it('Should return new string with passed string inserted at given index', () => {
        const sb = new StringBuilder('hello');

        sb.insertAt('woop', 0);
        expect(sb.toString()).to.be.equal('woophello');
    });

    it('Should throw error when not a string is passed as argument', () => {
        const sb = new StringBuilder('hello');
        expect(() => sb.insertAt(1, 0)).to.throw(TypeError, 'Argument must be a string');
    });
});

describe('Test remove function', () => {
    it('Should remove the wanted length of the string and return the new string', () => {
        const sb = new StringBuilder('hello');
        sb.remove(0, 3)
        expect(sb.toString()).to.be.equal('lo');
    });
});

describe('Test _vrfyParam', () => {
    it('Should throw error if non string argument is passed', () => {
        assert.throws(
            () => sb = new StringBuilder(1),
            TypeError
        );
    });
});

describe('Test toString function', () => {
    it('Should return the array from characters joined by a comma', () => {
        const sb = new StringBuilder('hello');
        expect(sb.toString()).to.be.equal('hello');
    });

    it('Shoul work correctly with all other methods', () => {
        let sb = new StringBuilder('hello');
        sb.append(', there');
        sb.prepend('User, ');
        sb.insertAt('woop', 5);
        sb.remove(6, 3);
        expect(sb.toString()).to.equal('User,w hello, there');
    });
});