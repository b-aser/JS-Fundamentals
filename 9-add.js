const { argv } = require('node:process');

argv[2] = parseInt(argv[2]);
argv[3] = parseInt(argv[3]);
console.log(argv[2] + argv[3]);
