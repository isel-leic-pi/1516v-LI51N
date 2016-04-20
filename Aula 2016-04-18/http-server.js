/**
 * Created by lfalcao on 18/04/16.
 */


var http = require("http");

var server = http.createServer(function (req, rsp) {
    console.log("Client request");

    console.log("request uri: " , req.url);
    console.log("request uri: " , req.method);
    console.log("request uri: " , req.headers);

    rsp.ontent-Type = "text/plain";

    rsp.end("SLB!!!")

});

var PORT = 8080;

server.listen(PORT, function () {
    console.log("server listening on port %s", PORT);
    
});




