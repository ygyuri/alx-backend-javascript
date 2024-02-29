const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('Calculation type: SUM', function () {
    it('should round and add two numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('Calculation type: SUBTRACT', function () {
    it('should round and subtract second number from the first', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('Calculation type: DIVIDE', function () {
    it('should round and divide first number by second number', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if second number is rounded to 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('invalid type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
    });
  });
});
