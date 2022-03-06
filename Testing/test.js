const { expect } = require('chai');
const isSymmetric = require('./symmetry');
describe('Symmetry checkered', () => {
    it('returns true for semmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
});