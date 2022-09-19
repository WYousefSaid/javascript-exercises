const sumAll = function (a, b) {
    let sum = 0;
    if (a > b && typeof(a) === 'number' && typeof(b) === 'number') {
        for (a; a >= b; a--) {
            sum += a;
        }
    }
    else if(a<b && typeof(a) === 'number' && typeof(b) === 'number'){
        for (a; a <= b; a++) {
            sum += a;
        }
    }
    if (a < 0 || b<0){
        return 'ERROR';
    }
    else{
        return 'ERROR';
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
