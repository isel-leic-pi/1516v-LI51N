'use strict'

function f1(a) {
    for(var i = 0; i < a.length; ++i) {
        if(a[i] % 2 == 0) {
            f2(a);
        }
        console.log(a[i]);
    }
}


function f2(a) {
    for(var i = 0; i < a.length; ++i) {
        console.log(a[i]);
    }
}


f1([1,2,3,4]);


