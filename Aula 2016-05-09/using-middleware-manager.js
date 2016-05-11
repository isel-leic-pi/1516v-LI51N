'use strict'

var mwManager = require('./middleware-manager');
let count = 0;


mwManager.use(middleware1);
mwManager.use(middleware2);

mwManager.execute();





function middleware1(req, rsp, next) {
    console.log("middleware 1 called");
    // if(count++%2 == 0) {
    //     return;
    // }
    next();


}

function middleware2(req, rsp, next) {

    setTimeout(delayResponse, 2000);

    function delayResponse() {
        console.log("middleware 2 called");
        next();
    }


}

