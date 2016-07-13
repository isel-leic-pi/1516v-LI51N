'use strict'

var http = require('http');

module.exports = function (options, cb) {
    console.log("options %j", options);

    let req = http.request(options, processResponse);

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });

    req.end();

    function processResponse(res) {
        let response = "";
        res.on('data', chunk => response += chunk);
        res.on('end', () => cb(null,JSON.parse(response)));
        res.on('error', (e) => cb(e));

        //console.log(response);
    }



}



