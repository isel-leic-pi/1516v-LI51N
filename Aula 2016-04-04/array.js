var a = [];

a[a.length] = "qqcoisa";

a.push("outra coisa");

console.log(a);


var lastElem = a[a.length-1];
--a.length;

console.log(a);

lastElem = a.pop();

console.log(a);
