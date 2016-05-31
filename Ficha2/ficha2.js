'use strict'

// Questão 2 a)

var f1 = function f(n) {
    console.log(n);
    console.log(this);
    console.log("----------------------");
}

var o = {f2 : f1};
var f3 = o.f2;


f1(1);              // 1  -- output: 1 - this: Objeto global
o.f2(2);            // 2  -- output: 2 - this: objeto referenciado pela variável o
f3(3);              // 3  -- output: 3 - this: Objeto global
f1.call(f1, 4)      // 4  -- output: 4 - this: objeto referenciado pela variável f1
f1.apply(8, [5])    // 5  -- output: 5 - this: objeto número 8 (boxed object do valor 8)

// Questão 2 b)

// Com 'use strict' todas as chamadas globais têm undefined como this e não o objeto global.

// Closures
function outer() {
    var foo = false;
    function innerF() {
        return foo;
    }
    return innerF;
}

var inner = outer();
console.log(inner());


// Hipótese 1
function outer1() {
    var foo = false;
    function innerF() {
        return foo;
    }
    return function() {
        foo = true;
        return innerF();
    };
}
var inner = outer1();
console.log(inner());


// Hipótese 2
function outer2() {
    var foo = false;
    function innerF() {
        return foo;
    }
    function setFoo() {
        foo = true;
    };

    return { inner: innerF, set: setFoo }
}
var obj = outer2();
obj.set();
console.log(obj.inner());



// Questão 4

var x = 0;
someFunction(() => x = 1);
console.log("x value:" + x);



function someFunction(cb) {
    //cb();  // Chamada inline a cb (x = 1)
    setTimeout(cb, 10); // Chamada assíncrona a cb (x = 0)
}


// Questão 6

app.get('/foo/:p', f1);

app.get('/foo/bar', f2);

function f1(req, rsp, next) {
    console.log('/foo/' + req.params.p);  // 6 a) Console.log para um pedido a /foo/bar.
    //6 b) Não gera qualquer resposta ao cliente
}

function f2(req, rsp, next) {
    console.log('/foo/bar');
    rsp.send('/foo/bar');
}



