const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('Sum a and b',() =>{
        assert(calculateNumber('SUM', 5.0, 2.7));
    });
    it('Subtract a and b',() =>{
        assert(calculateNumber('SUBTRACT', 7.654564, 3.23541));
    });
    it('Divide a and b',() =>{
        assert(calculateNumber('DIVIDE', 7.6, 1.6));
    });
    it('Divide with b at 0',() =>{
        assert(calculateNumber('DIVIDE',5 ,0.5));
    });
    
})