const { argv } = require('node:process');

const sentence = "C is fun";

if (argv[2] == undefined || isNaN(argv[2] || argv[2] < 0)){
    console.log("Missing number of occurrences");
}else{
    argv[2] = parseInt(argv[2]);
    for (let index = 0; index < argv[2]; index++) {
        console.log(sentence);
    }    
}