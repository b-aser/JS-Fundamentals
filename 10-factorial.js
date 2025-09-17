const { argv } = require('node:process');

const n = parseInt(argv[2], 10);

if (n < 0) {
    console.log('Please provide a non-negative integer as input.');
    process.exit(1);
}

function computeFactorial(n) {
    if (n === 0 || n === 1 || isNaN(n)) {
        return 1;
    } else {
        return n * computeFactorial(n - 1);
    }
}

const factorial = computeFactorial(n);
console.log(factorial);