'use strict'


function f() {
    console.log(v1);

    var v1 = 10;

    console.log(v1);


    console.log(v2);

    let v2 = 10;

    console.log(v2);

}


//f();


function farray() {
    let a = new Array(5);

    for(var i = 0; i < a.length; ++i) {

        var f1 = function (b) {
            var f =  function () {
                console.log(b);
            };

            return f;
        }


        a[i] = f1(i);


        a[i] = (function(b) {
            return function () {
                console.log(b);
            }
        })(i);
    }

    return a;
}

let af = farray();


for(var i = 0; i < af.length; ++i) {
    af[i]();
}

//af.forEach(e => e());
