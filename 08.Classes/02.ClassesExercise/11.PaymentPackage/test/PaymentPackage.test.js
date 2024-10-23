import { assert } from 'chai';
import { PaymentPackage } from '../11.PaymentPackage.js';

describe(`Test create instance`, function () {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    afterEach(() => {
        paymentPackage = null;
    });

    it(`Should set name property`, function () {
        assert.equal(paymentPackage.name, 'HR Services', `name should be equal to HR Services not ${paymentPackage.name}`);
    });

    it(`Should set value property`, function () {
        assert.equal(paymentPackage.value, 1500, `value should be equal to 1500 not ${paymentPackage.value}`);
    });

    it(`Should set VAT property`, function () {
        assert.equal(paymentPackage.VAT, 20, `VAT should be equal to 20 not ${paymentPackage.VAT}`);
    });

    it(`Should set active property`, function () {
        assert.isTrue(paymentPackage.active, `active should be true`);
    });
});

describe('Test name accessors', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    afterEach(() => {
        paymentPackage = null;
    });

    it('Should return name', () => {
        assert.equal(paymentPackage.name, 'HR Services', `name should be equal to HR Services not ${paymentPackage.name}`);
    });

    it('Should set name correctly', () => {
        assert.equal(paymentPackage.name, 'HR Services');
        paymentPackage.name = 'Pesho';
        assert.equal(paymentPackage.name, 'Pesho', `name should be equal to Pesho not ${paymentPackage.name}`);
    });

    it('should throw exception on invalid input', () => {
        assert.throws(() => {
            new PaymentPackage(1, 1500);
        });
    });

    it('should throw exception on empty string', () => {
        assert.throws(() => {
            new PaymentPackage('', 1500);
        });
    });
});

describe('Test value accessors', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    afterEach(() => {
        paymentPackage = null;
    });

    it('Should return value', () => {
        assert.equal(paymentPackage.value, 1500, `value should be equal to 1500 not ${paymentPackage.value}`);
    });

    it('Should set value correctly', () => {
        assert.equal(paymentPackage.value, 1500);
        paymentPackage.value = 200;
        assert.equal(paymentPackage.value, 200, `name should be equal to 200 not ${paymentPackage.value}`);
    });

    it('Should throw exception on invalid input', () => {
        assert.throws(() => {
            paymentPackage.value = 'string', 'Value must be a number';
        });
    });

    it('Should throw exception on negative value', () => {
        assert.throws(() => {
            paymentPackage.value = -2, 'Value must be a positive number';
        });
    });

    it('Should set correct value with 0', () => {
        paymentPackage.value = 0;
        assert.equal(paymentPackage.value, 0, `Value should be equal to 0 or more`);
    });
});

describe('Test VAT accessors', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    afterEach(() => {
        paymentPackage = null;
    });

    it('Should return VAT', () => {
        assert.equal(paymentPackage.VAT, 20, `VAT should be equal to 20 not ${paymentPackage.VAT}`);
    });

    it('Should set VAT correctly', () => {
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 200;
        assert.equal(paymentPackage.VAT, 200, `VAT should be equal to 200 not ${paymentPackage.VAT}`);
    });

    it('Should throw exception on invalid input', () => {
        assert.throws(() => {
            paymentPackage.VAT = 'string', 'VAT must be a number';
        });
    });

    it('Should throw exception on negative value', () => {
        assert.throws(() => {
            paymentPackage.VAT = -2, 'VAT must be a positive number';
        });
    });

    it('Should set correct value with 0', () => {
        paymentPackage.VAT = 0;
        assert.equal(paymentPackage.VAT, 0, `VAT should be equal to 0 or more`);
    });
});

describe('Test active accessors', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });
    afterEach(() => {
        paymentPackage = null;
    });

    it('Should return active', () => {
        assert.isTrue(paymentPackage.active, `active should be true`);
    });

    it('Should set active correctly', () => {
        assert.isTrue(paymentPackage.active);
        paymentPackage.active = false;
        assert.isFalse(paymentPackage.active, `active should be false`);
    });

    it('Should throw exception on invalid input', () => {
        assert.throws(() => {
            paymentPackage.active = 'string','Active status must be a boolean';
        });
    });
});

describe('Test toString', () => {
    it('Should return correct result', () => {
        const paymentPackage = new PaymentPackage('HR Services', 1500);
        const expected = ['Package: HR Services',
            `- Value (excl. VAT): 1500`,
            `- Value (VAT 20%): ${1500 * 1.2}`
        ].join('\n');

        assert.equal(expected, paymentPackage.toString(), 'Wrong output');
    });

    it('Should return correct result when active is false', () => {
        const paymentPackage = new PaymentPackage('HR Services', 1500);
        paymentPackage.active = false;
        const expected = ['Package: HR Services (inactive)',
            `- Value (excl. VAT): 1500`,
            `- Value (VAT 20%): ${1500 * 1.2}`
        ].join('\n');

        assert.equal(expected, paymentPackage.toString(), 'Wrong output');
    });
});