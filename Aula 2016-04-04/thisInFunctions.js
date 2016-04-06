// Calling functions globally

function foo1() {
    console.log(this);
}

foo1();

var foo2 =foo1 ;

console.log(foo2.name)


// Calling functions through object properties


var o = {
};

o.f = foo1;

o.f();

/////////////


// Creating objects

var o = new Object();

var x = new foo1();




