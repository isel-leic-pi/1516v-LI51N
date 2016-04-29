
'use strict'

var debug = require('debug')('calc-module-async');
var debugInfo = require('debug')('calc-module-async:info');

debug("mymodule global code start");
module.exports.createCalc = function() {


    let memObj = { };
    debugInfo("This is %j", this);
    return {
        add: add
    };

    // this.add = add;
    // this.sub = sub;
    // this.times = times;
    // this.div =  div;
    // this.mem = mem;
    // this.getMem =  getMem;
    //

    function add(x, y, cb) {
        setTimeout(() => cb(x+y), 0);

    }

};



debug("mymodule global code end");