const sumAll = function(num1, num2) {
    let sum = 0
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number') || (num1 % 1 !== 0) || 
    (num2 % 1 !== 0) || (num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    }
    if (num1 < num2) {
        sum += num1;
        for (let i = num1 + 1; i <= num2; i++) {
            sum += i;
        }
    }
    if (num2 < num1) {
        sum += num2;
        for (let j = num2 + 1; j <= num1; j++) {
            sum += j;
        }
    }
    return sum;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
