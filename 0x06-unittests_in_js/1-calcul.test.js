const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Sum a and b',() =>{
    assert.strictEqual(calculateNumber('SUM', 5.0, 2.7), 8);
  });
  it('Subtract a and b',() =>{
    assert.strictEqual(calculateNumber('SUBTRACT', 7.654564, 3.23541), 5);
  });
  it('Sum a and b',() =>{
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('Subtract a and b',() =>{
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Divide a and b',() =>{
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Divide a and b',() =>{
    assert.strictEqual(calculateNumber('DIVIDE', 7.6, 1.7), 4);
  });
  it('Divide with b at 0',() =>{
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0.4), 'Error can not divide by zero');
  });
  it('Divide with b at 0',() =>{
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error can not divide by zero');
  });
  it('Divide with a at 0',() =>{
    assert.strictEqual(calculateNumber('DIVIDE', 0, 9), 0);
  });
});