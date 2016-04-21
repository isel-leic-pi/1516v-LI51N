'use strict'

function filter(arr, asyncPred, resultsCb) {
    let res = [];
    let count = arr.length;
    arr.forEach(e => {
        asyncPred(e, (truthValue) => {
            if(truthValue) res.push(e);
            if(--count == 0) {
                resultsCb(res);
            }
        });
    })
}


filter([1,2,3,4,5], pred, console.log )

function pred(e, cb) {
    cb(e % 2 == 0);
}

function predAsync(e) {
    setTimeout(() => cb(e % 2 == 0), 0);
}

console.log(this.constructor);

f();

function f() {
    console.log("this: " + this);
}