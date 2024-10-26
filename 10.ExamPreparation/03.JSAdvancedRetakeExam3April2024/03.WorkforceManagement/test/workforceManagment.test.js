import { assert } from "chai";
import { workforceManagement } from "../workforceManagement.js";

describe('Tests for workforceManagment', () => {

    describe('Test recruitStaff', () => {
        it('Should should throw error on invalid role', () => {
            assert.throws(() => workforceManagement.recruitStaff('John', 'HR', 4), `We are not currently hiring for this role.`);
        });

        it('Should should not hire worker', () => {
            const actualMessage = workforceManagement.recruitStaff('John', 'Developer', 4);
            const expectedMessage = `${'John'} has been successfully recruited for the role of ${'Developer'}.`;

            assert.equal(actualMessage, expectedMessage);
        });

        it('Should should not hire workers with less than 4 years experience', () => {
            const actualMessage = workforceManagement.recruitStaff('John', 'Developer', 3);
            const expectedMessage = `${'John'} is not suitable for this role.`;

            assert.equal(actualMessage, expectedMessage);
        });
    });

    describe('Test computeWages', () => {
        it('Should return totalPayment with less than or equal to 160 hours', () => {
            assert.equal(workforceManagement.computeWages(150), 150 * 18);
            assert.equal(workforceManagement.computeWages(160), 160 * 18);
        });

        it('Should return totalPayment with bonus over 160 hours', () => {
            assert.equal(workforceManagement.computeWages(161), 161 * 18 + 1500);
        });

        it('Should throw error on invalid hours worked', () => {
            assert.throws(() => workforceManagement.computeWages('1'), 'Invalid hours');
            assert.throws(() => workforceManagement.computeWages(-2), 'Invalid hours');
        });
    });

    describe('Test dismissEmployee', () => {
        it('Should remove employee', () => {
            const actual = workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], 1);
            const expected = `Ivan, Tony`;

            assert.equal(actual, expected);
        });

        it('Should throw error on invalid workforce', () => {
            assert.throws(() => workforceManagement.dismissEmployee('Tony, John', 1));
        });

        it('Should throw error on invalid employee index', () => {
            assert.throws(() => workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], 1.5), 'Invalid input');
            assert.throws(() => workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], '1'), 'Invalid input');
            assert.throws(() => workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], -1), 'Invalid input');
            assert.throws(() => workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], 3), 'Invalid input');
            assert.throws(() => workforceManagement.dismissEmployee(['Ivan', 'George', 'Tony'], 4), 'Invalid input');
        });
    });
}); 