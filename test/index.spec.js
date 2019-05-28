const RoundOff = require('../src');

describe('roundoff decimal value to the provided parameter', () => {
    it('should return roundff value', () => {
        let roundedValue = RoundOff(3.45678, 3);
        expect(roundedValue).toEqual(3.457); 
    });
});