'use strict'




let http = require("http");


let API  = new Foo();

    function Foo() {
    var API_HOST = "api.tvmaze.com";

    function concat(segment, id, qs) {
        id = id ? ("/" + id) :  "";
        qs = qs ? ("?q=" + qs) :  "";

        return segment + id + qs;
    }


    this.SHOWS = function () {
        return concat("shows");
    }

    this.SHOW = function (id) {
        return concat("shows", id);
    }

    this.SHOWS_SEARCH = function (qs) {
        return concat("shows", null, qs);
    }

    this.HOST = function () {
        return API_HOST;
    }
}


let qs = process.argv[2];

let req = http.request({ host: API.HOST(), path: API.SHOWS_SEARCH(qs) }, processResponse);

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

req.end();

function processResponse(res) {
    let response = "";
    res.on('data', chunk => response += chunk);
    res.on('end', () => console.log(response));

    console.log(msg)
}





