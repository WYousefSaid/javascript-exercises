const removeFromArray = function(...args) {
    const array = args[0];
    const refreshedArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            refreshedArray.push(item);
        }
    });

    return refreshedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
