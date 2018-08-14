const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('all different notes', () => {
        it('should return sum of three notes, only integers', () => {
            const actual = calculateStylePoints([15, 16, 17, 18, 19]);
    
            const expected = 51;
    
            assert.equal(actual, expected);
        });

        it('should return sum of three notes, integers and half numbers', () => {
            const actual = calculateStylePoints([16, 16.5, 17, 17.5, 19]);
    
            const expected = 51;
    
            assert.equal(actual, expected);
        });
    });

    describe('some notes are similar', () => {
        it('should return sum of three notes, only integers', () => {
            const actual = calculateStylePoints([16, 15, 15, 16, 15]);

            const expected = 46;

            assert.equal(actual, expected);
        });

        it('should return sum of three notes, integers and half numbers', () => {
            const actual = calculateStylePoints([16, 15.5, 14.5, 16, 16]);

            const expected = 47.5;

            assert.equal(actual, expected);
        });
    });

    describe('all notes are similar', () => {
        it('should return sum of three notes, only integers', () => {
            const actual = calculateStylePoints([17, 17, 17, 17, 17]);

            const expected = 51;

            assert.equal(actual, expected);
        });

        it('should return sum of three notes, half numbers', () => {
            const actual = calculateStylePoints([16.5, 16.5, 16.5, 16.5, 16.5]);

            const expected = 49.5;

            assert.equal(actual, expected);
        });
    });
});