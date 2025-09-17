const { argv } = require('node:process');

if (argv[2] == undefined){
    console.log("No argument");
}else{
    argv.forEach((val, index) => {
        if (index >= 2){
            console.log(val + " ");
        }
    });
}
