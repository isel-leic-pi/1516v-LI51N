//'use strict'




var http = require("http");

var server = http.createServer();

server.on('request', function (req, rsp) {
    console.log("Client request");

    console.log("request uri: " , req.url);
    console.log("request uri: " , req.method);
    console.log("request uri: " , req.headers);

    rsp.writeHead(200, "SLB OK", {
        'Content-Type': 'text/plain1'
    });


    rsp.end("SLB!!!")
})


var PORT = 8080;

server.listen(PORT, function () {
    console.log("server listening on port %s", PORT);
});






