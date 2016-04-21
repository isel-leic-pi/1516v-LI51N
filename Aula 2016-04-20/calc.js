//'use strict'

console.log("This in main module is %j", this);

var Calc = require('./modules/calc-module');

console.log("Calc is ",  Calc);

var mm = Calc.createCalc();
var f1 = Calc.createCalc;
f1();


console.log(mm.mem("m1", mm.add(2,3)));
console.log("mm-" + mm.sub(2, mm.getMem("m1")));
console.log(mm.times(2,3));
console.log(mm.div(2,3));

console.log("mm-before:" + mm.sub(2, mm.getMem("m1")));
const mm1 = Calc.createCalc();
console.log("mm-after:" + mm.sub(2,mm.getMem("m1")));

console.log(mm === mm1);

console.log(mm1.add(2,3));
console.log(mm1.sub(2,mm1.getMem("m1")));
console.log(mm1.times(2,3));
console.log(mm1.div(2,3));




