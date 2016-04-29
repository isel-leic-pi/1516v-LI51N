'use strict'

var calc = require('../modules/calc-module-async').createCalc();

exports.testAdd = function(test) {
    test.expect(1);

    calc.add(2,3, res => {
        test.equal(res, 5, "3+2 should be 5 in base 10" );
        test.done();
    } )
};

exports.testAddWithInvalidArguments = function(test) {
    test.expect(1);

    calc.add(undefined, undefined, res => {
        test.equal(res, undefined, "undefined+undefined should be NaN" );
    test.done();
} )
};


console.log("aaa: " + undefined+undefined);