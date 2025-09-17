const { argv } = require('node:process');

const character = "X";

if (argv[2] == undefined || isNaN(argv[2] || argv[2] < 0)){
    console.log("Missing size");
}else{
    argv[2] = parseInt(argv[2]);
    let row = "";
    for (let i = 0; i < argv[2]; i++) {
        for (let j = 0; j < argv[2]; j++) {
            row += character;
        }
        console.log(row);
        row = "";
    }
}