'use strict'

var debug = require('debug')('calc-async');

debug("This in main module is is %j", this);

const Calc = require('./modules/calc-module-async');


let mm = Calc.createCalc();

mm.add(2, 3, (res) => {
        debug("Res: " + res);
});

debug("End");



