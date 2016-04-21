var callNumber = 0


function doSomething(cb) {
    //cb();

    callNumber % 2 == 0 ? cb() : setTimeout(cb, 0);
    callNumber++;

}


var count = 0;

doSomething(() => {
    ++count;
});

console.log(count);

doSomething(() => {
    ++count;
});

console.log(count);