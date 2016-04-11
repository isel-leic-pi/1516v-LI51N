'use strict'

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}


var s = new Shape(10, 20, 30);

console.log(s);

s.move(2,2);

console.log(s);
