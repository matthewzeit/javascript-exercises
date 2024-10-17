const repeatString = function(string, num) {
    let newWord = string;
    for (let i = 1; i < num; i++) {
        newWord += string;
    }
    if (num == 0) {
        newWord = "";
    }
    if (num < 0) {
        newWord = 'ERROR';
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
