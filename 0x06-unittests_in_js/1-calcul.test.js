const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('Calculation type: SUM', function () {
    it('should round and add two numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('Calculation type: SUBTRACT', function () {
    it('should round and subtract second number from the first', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('Calculation type: DIVIDE', function () {
    it('should round and divide first number by second number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" if second number is rounded to 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('invalid type', function () {
    it('should throw an error for invalid type', function () {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });
});
