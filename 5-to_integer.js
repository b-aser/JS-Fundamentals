const { argv } = require('node:process');

if (argv[2] == undefined || isNaN(argv[2])){
    console.log("Not a number");
}else{
    argv[2] = parseInt(argv[2]);
    console.log("My number: " + argv[2]);
}
