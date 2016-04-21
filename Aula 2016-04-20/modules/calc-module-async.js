
'use strict'

console.log("mymodule global code start");
module.exports.createCalc = function() {


    let memObj = { };
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
    console.log("This is %j", this);
    return this;



    function add(x, y, cb) {
        setTimeout(() => cb(x+y), 0);

    }

};



console.log("mymodule global code end");