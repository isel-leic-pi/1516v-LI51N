// Calling functions with function operator, call and apply methods

function foo(a, b) {
    console.log("foo function with arguments a='" + a + "'; b='" + b + "'");
}

console.log(foo);


foo(1);
foo(2,"SLB");
foo(2,"SLB", "qq coisa");
foo.call(null, 4,"SLB");

var args = [5, "SLB"];
foo.apply(null, args);



var foo1 = function () {
    console.log("foo function");
}


foo1();

var foo2 = new Function('console.log("foo function")');

foo2();




