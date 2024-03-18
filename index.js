const userInformation = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
        text : `Hello I'm ${userInformation.name} ans I'm learning on ${userInformation.campus}`,
        e : "oO",
        T : "U "
    }));
    
    
    
    
// import * as cowsay from "cowsay";

// let output: string = cowsay.say({text : `Hello I'm ${userInformation.name} ans I'm learning on ${userInformation.campus}`});

// console.log(output);