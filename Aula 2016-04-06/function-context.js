function ContextFunction() {
    var counter = 0;

    this.incr = function () {
        ++counter;
    }


    this.decr = function () {
        ++counter;
    }

    this.set = function (newCounter) {
        counter = newCounter;

    }
}



function ContextFunction(initialValue) {
    var counter = initialValue ? initialValue : 0;

    var innerFunctions = {
        incr: function () {
            ++counter;
        },

        decr: function () {
            --counter;
        },
        set: function (newCounter) {
            counter = newCounter;
        },
        getCounter: function (newCounter) {
            return counter;

        },

        getInitialValue: function () {
            return initialValue;

        },

        anotherContext: function(iv) {
            var anotherCounter = iv;

            return function() {
                return anotherCounter++ + counter;
            }


        }


    }
    return innerFunctions;
}


var functions1 = ContextFunction();
var currCounter = functions1.getCounter();
console.log(currCounter);

functions1.incr();
var currCounter = functions1.getCounter();
console.log(currCounter);

functions1.set(15);
var currCounter = functions1.getCounter();
console.log(currCounter);

console.log(functions1.getInitialValue());

var innerFunctionOfInnerFunction1 =  functions1.anotherContext(3);

var innerFunctionOfInnerFunction2 = functions1.anotherContext(4);


console.log(innerFunctionOfInnerFunction1());
console.log(innerFunctionOfInnerFunction2());


var functions2 = ContextFunction(10);
console.log(functions2.getInitialValue());