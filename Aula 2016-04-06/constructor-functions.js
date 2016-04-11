
function extend(defaultObj, toExtendObj) {
    for(var k in defaultObj) {
        if(toExtendObj[k] == undefined) {
            toExtendObj[k] = defaultObj[k];
        }
    }
}


function Uri(uriString) {
    var uriParts = uriString.split(":");

    this.schema = uriParts[0];

    // Remove the "//" from hostname
    uriParts[1] = uriParts[1].substring(2);

    // Parsing host and port


    var idx = uriParts.length - 1;
    var propertyName = idx == 2 ? "port" : "host";

    // Always set the host, because if the uriParts has only two segments it will be ser next
    this.host = uriParts[1];


    var idxSlash = uriParts[idx].indexOf("/");
    this[propertyName] =  uriParts[idx].substring(0, idxSlash);


    uriString = uriParts[idx].substring(idxSlash);

    // Split the path and the query string
    uriString = searchUriPartAndSetPropertyAndReturnRemainingString.call(this, "hash", "#");
    uriString = searchUriPartAndSetPropertyAndReturnRemainingString.call(this, "query", "?");
    this.path = uriString;

    extend({ schema: "SLB", host:"SLB", port: 35, path: "/", query: "SLB", hash: "SLB"}, this);



    function searchUriPartAndSetPropertyAndReturnRemainingString(propName, delimiter) {
       var parts = uriString.split(delimiter);
        if(parts.length != 1) {
            this[propName] = parts[1];
        }
        return parts[0];
    }


    this.getSchema = function() {
        return this.schema;
    }
}






//var uri = new Uri("https://adeetc.thothapp.com:8080/classes/PI/1516v/LI51N/resources?a=b#xpto");
var uri = new Uri("https://adeetc.thothapp.com");


console.log("schema: ", uri.schema);
console.log("schema: ", uri.getSchema());

var f = uri.getSchema;

f();
f.call(uri);

uri.getSchema();


console.log("host: ", uri.host);
console.log("port: ", uri.port);
console.log("path: ",uri.path);
console.log("query: ",uri.query);
console.log("hash: ",uri.hash);






