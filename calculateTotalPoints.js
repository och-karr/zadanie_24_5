const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;

// calculateTotalPoints(100, "Duza", 90, [5, 6, 7, 8, 10] , 5, 10);