const palindromes = function (string) {
    var re = /[\W_]/g
    const str = string.toLowerCase().replace(re,'');
    const strreversed = str.split('').reverse().join('');
    return str === strreversed;
};

// Do not edit below this line
module.exports = palindromes;
