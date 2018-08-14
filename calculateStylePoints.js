const calculateStylePoints = (styleNotes) => {
    var arr=styleNotes;
    typeOfArr = typeof arr;

    const deleteMaxMin = (arr) => {
        var mathMax = Math.max(...arr);
        var mathMin = Math.min(...arr);
        for(i=0; i<=arr.length; i++) {
            if (arr.length!==3) {
                if (arr[i]===mathMax){
                    var maxNote = arr.splice(i, 1);
                }
                if (arr[i]===mathMin){
                    var minNote = arr.splice(i, 1);
                }
            } 
        }
    }

    if (typeOfArr === "string"){
        var arrFromString = arr.split(",");
        arr = arrFromString.map(Number);
        deleteMaxMin(arr);
    } else if (typeOfArr === "object"){
        deleteMaxMin(arr);
    }

    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};


console.log(calculateStylePoints([1,2,3,4,5]));
console.log(calculateStylePoints("1,2,3,4,5"));


module.exports = calculateStylePoints;