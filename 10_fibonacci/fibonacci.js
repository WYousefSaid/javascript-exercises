const fibonacci = function(n) {
    return n < 1 ? "OOPS"
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
