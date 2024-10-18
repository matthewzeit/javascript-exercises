const removeFromArray = function(array, element) {
    let arrayLength = array.length;
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (arguments[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
