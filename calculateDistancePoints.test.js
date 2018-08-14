const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillSize is Mamucia', () => {
        it('distance is shorter than kPoint', () => {
            const actual = calculateDistancePoints(85, "Mamucia", 90);
    
            const expected = 110;
    
            assert.equal(actual, expected);
        });

        it('distance is longer than kPoint', () => {
            const actual = calculateDistancePoints(95, "Mamucia", 90);
    
            const expected = 130;
    
            assert.equal(actual, expected);
        });
    });

    describe('hillSize is Duza', () => {
        it('distance is shorter than kPoint', () => {
            const actual = calculateDistancePoints(75, "Duza", 80);
    
            const expected = 51;
    
            assert.equal(actual, expected);
        });

        it('distance is longer than kPoint', () => {
            const actual = calculateDistancePoints(85, "Duza", 80);
    
            const expected = 69;
    
            assert.equal(actual, expected);
        });
    });

    describe('hillSize is Normalna', () => {
        it('distance is shorter than kPoint', () => {
            const actual = calculateDistancePoints(55, "Normalna", 70);
    
            const expected = 42;
    
            assert.equal(actual, expected);
        });

        it('distance is longer than kPoint', () => {
            const actual = calculateDistancePoints(105, "Normalna", 70);
    
            const expected = 102;
    
            assert.equal(actual, expected);
        });
    });
});