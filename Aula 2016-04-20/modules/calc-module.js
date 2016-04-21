//'use strict'

console.log("mymodule global code start");

module.exports.createCalc = function foo() {
    var memObj = { };

    console.log("This is ", this);
    
    return {
        add: add,
        sub: sub,
        times: times,
        div: div,
        mem: mem,
        getMem: getMem
    };

    // this.add = add;
    // this.sub = sub;
    // this.times = times;
    // this.div =  div;
    // this.mem = mem;
    // this.getMem =  getMem;
    //

    return this;



    function add(x, y) {
        return x+y;
    }

    function sub(x, y) {
        return x-y;
    }

    function times (x, y) {
        return x*y;
    }

    function div(x, y) {
        return x/y;
    }

    function mem(name, value) {
        memObj[name] = value;
        return value;
    }

    function getMem(name) {
        console.log("mem[%s]=%s", name, memObj[name]);
        return memObj[name];
    }
};



console.log("mymodule global code end");
