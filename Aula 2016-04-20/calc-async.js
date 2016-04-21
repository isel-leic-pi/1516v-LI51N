'use strict'



console.log("This in main module is is %j", this);

const Calc = require('./modules/calc-module-async');


let mm = Calc.createCalc();

mm.add(2, 3, (res) => {
        console.log("Res: " + res);
});

console.log("End");



