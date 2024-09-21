const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1.4 and 4.5 (both should be rounded)', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  });

  it('should return 6 when inputs are 1.5 and 4.5 (both rounded up)', () => {
    assert.strictEqual(calculateNumber(1.5, 4.5), 6);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -3 when inputs are -1.4 and -1.4', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.4), -3);
  });

  it('should return -3 when inputs are -1.5 and -1.5 (both rounded down)', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -3);
  });

  it('should return 0 when inputs are 0.4 and -0.4', () => {
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  });
});
