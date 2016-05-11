'use strict'


let middlewares = [];

module.exports.use = function (mw) {
    middlewares.push(mw);
}


module.exports.execute = function (req, rsp) {

    let idx = 0;
    next();

    function next() {
        if(idx < middlewares.length) {
            middlewares[idx++](req, rsp, next);
        }
    }
}



