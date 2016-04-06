var o = new Object();

o.p1 = 10;
o.p2 = "SLB";
o.p3 = true;


// Accessing object properties with dot notation
console.log("Dot notation")
console.log(o.p1);
console.log(o.p2);
console.log(o.p3);
console.log(o.p4);
o.p4 = "Now is defined";
console.log(o.p4);

console.log("---------------------------------")

// Accessing object properties with subscript notation
console.log("Subscript notation")
console.log(o['p1']);
console.log(o['p2']);
console.log(o['p3']);
console.log(o['p4']);

console.log("Changing property value with subscript notation")

console.log("---------------------------------")
o['p1'] = "Outra coisa";
console.log(o['p1']);


o['2+3'] = 25;
console.log(o['2+3']);


console.log("---------------------------------")

console.log("Show all object properties with extended for")

showObject(o);

console.log("Creating object using object notation")

var o1 = {
    p1: 10,
    p2: "SLB",
    p3: true,
    p4: {
        a: 10,
        b: "Foo",
        c: null
    }
};

o1[0] = 10;
console.log("o1.length: " + o1.length);
showObject(o1);



function showObject(obj) {
    for (var k in obj) {
        console.log("o[" + k + "]= " + obj[k])
    }
}



console.log("---------------------------------")

console.log("Arrays");

var a = new Array();
console.log("a.length: " + a.length);
a[100] = 45;
a["p1"] = 45;
console.log("a.length: " + a.length);
console.log("a[100]: " + a[100]);
a.length = 0;
console.log("a[100]: " + a[100]);
a.length = 101;
console.log("a[100]: " + a[100]);


console.log("---------------------------------");

console.log("Arrays in JSON notation");

var a1 = [,,,,"ABC",{ }, true,,,,,,,,,,45];
a1.p1 = 1;

showObject(a1);

console.log("---------------------------------");

console.log("Functions notation");

var add = function (a,b) {
    return function() {
        return a + b;
    }
};

add.p1 = 10;
add(2,3);




var o3 = {
    p1: 10,
    m1: add
};


console.log(o3.m1(2,3)());





