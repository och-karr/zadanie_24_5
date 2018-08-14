const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('windFactor and gateFactor are both positive integers', () => {
        it('hillSize is Mamucia', () => {
            const actual = calculateTotalPoints(85, "Mamucia", 90, [15, 16, 17, 18, 19] , 5, 10);
    
            const expected = 176;
    
            assert.equal(actual, expected);
        });
    });

    describe('windFactor and gateFactor are positive and negative', () => {
        it('hillSize is Duza', () => {
            const actual = calculateTotalPoints(85, "Duza", 80, [16, 15.5, 14.5, 16, 16] , -5, 10);
    
            const expected = 121.5;
    
            assert.equal(actual, expected);
        });
    });

    describe('windFactor and gateFactor are both negative integers', () => {
        it('hillSize is Normalna', () => {
            const actual = calculateTotalPoints(55, "Normalna", 70, [16.5, 16.5, 16.5, 16.5, 16.5] , -5, -10);
    
            const expected = 76.5;
    
            assert.equal(actual, expected);
        });
    });
});