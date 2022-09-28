const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (a) {
   let sum = 0;
    for (let b = 0; b < a.length; b++) {
        sum += a[b];

    }
    return sum;
};

const multiply = function (a) {
    const total = a.reduce((accumulator, current) => accumulator*current,1);
    return total;
};

const power = function (a,b) {
    return Math.pow(a,b);

};

const factorial = function (num) {
    if (num === 0){
        return 1;
    }
    else if (num > 0){
        let fact = 1;
        for (i = 1; i<=num; i++){
            fact *= i;
        }
        return fact;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
