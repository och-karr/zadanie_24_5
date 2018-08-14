const calculateStylePoints = (styleNotes) => {
    var arr=styleNotes;
    var mathMax = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
    var mathMin = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
    for(i=0; i<=arr.length; i++) {
        if (arr.length!==3) {
            if (arr[i]===mathMax){
                var maxNote = arr.splice(i, 1); //nie wiem czy skladniowo to jest ok (if bez else?) ale pisalam tą funkcję 3 godziny i już mi mózg przestał pracować :D
            }
            if (arr[i]===mathMin){
                var minNote = arr.splice(i, 1);
            }
        } 
    }
    
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

//vary, lety, czy consty ? co mam używać ?

module.exports = calculateStylePoints;