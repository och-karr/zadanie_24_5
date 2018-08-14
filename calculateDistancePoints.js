const calculateDistancePoints = (distance, hillSize, kPoint) => {
    var distancePoints;
    switch (hillSize) {
        case 'Mamucia':
            var startPoints = 120;
            if (distance<=kPoint){
                distancePoints=startPoints-(kPoint-distance)*2;
            } else {
                distancePoints=startPoints+(distance-kPoint)*2;
            }
            break;
        case 'Duza':
            var startPoints = 60;
            if (distance<=kPoint){
                distancePoints=startPoints-(kPoint-distance)*1.8;
            } else {
                distancePoints=startPoints+(distance-kPoint)*1.8;
            }
            break;
        case 'Normalna':
            var startPoints = 60;
            if (distance<=kPoint){
                distancePoints=startPoints-(kPoint-distance)*1.2;
            } else {
                distancePoints=startPoints+(distance-kPoint)*1.2;
            }
            break;
        default: //czy musi być default w switch statement?
            console.log('Bad data');
    }
    return distancePoints;
};

module.exports = calculateDistancePoints;