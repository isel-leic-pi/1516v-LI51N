'use strict'


function extend(defaultObj, toExtendObj) {
    for(var k in defaultObj) {
        if(toExtendObj[k] == undefined) {
            toExtendObj[k] = defaultObj[k];
        }
    }
    return toExtendObj;
}

let http = require("http");


let API  = new Foo();

    function Foo() {
    var API_HOST = "api.tvmaze.com";


    this.PATH = function (uri) {
        uri.qs = uri.qs ? '?' + uri.qs : uri.qs;
        extend({path: '/shows', id: '', qs: ''}, uri);
        return uri.path + uri.id + uri.qs;
    }

    this.HOST = function () {
        return API_HOST;
    }
}

let path = process.argv[2];
let qs = process.argv[3];

let options = { host: API.HOST(), path: API.PATH({ path: path, qs: '?' + qs}) };

console.log("options %j", options);

let req = http.request(options, processResponse);

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

req.end();

function processResponse(res) {
    let response = "";
    res.on('data', chunk => response += chunk);
    res.on('end', () => console.log(response));

    console.log(response);
}





