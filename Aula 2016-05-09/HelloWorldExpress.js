'use strict'

var express = require('express');

var app = express();

app.use(middleware1);
app.use(middleware2);



let count = 0;

function middleware1(req, rsp, next) {
    console.log("middleware 1 called");
    if(count++%2 == 0) {
        rsp.status(201)
            .write("Hello World from express - first middleware");

    }
    next();


}

function middleware2(req, rsp, next) {

    setTimeout(delayResponse, 2000);

    function delayResponse() {
        console.log("middleware 2 called");
        console.log(rsp.statusCode);

        rsp.status(200)
            .write("Hello World from express - second middleware");

        console.log(rsp.statusCode);
        rsp.end();
    }


}

const PORT = 3000;

app.listen(PORT, function (err) {
    console.log("Application listening on port " + PORT);
})
