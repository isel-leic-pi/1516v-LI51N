
function extend(defaultObj, toExtendObj) {
    for(var k in defaultObj) {
        if(toExtendObj[k] == undefined) {
            toExtendObj[k] = defaultObj[k];
        }
    }
}


function Uri(uriString) {
    var uriParts = uriString.split(":");

    var schema = uriParts[0];

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
        return schema;
    }
    
    this.getHost = function() {
        return this.host;
    }
}

Uri.prototype.getHost = function() {
    return this.host;
}






//var uri = new Uri("https://adeetc.thothapp.com:8080/classes/PI/1516v/LI51N/resources?a=b#xpto");
var uri = new Uri("https://adeetc.thothapp.com");


console.log("schema: ", uri.schema);
console.log("schema: ", uri.getSchema());

var f = uri.getSchema;

f();
f.call(uri);


var str = "Glorioso";

//var newStr = str.enclose("SLB");

String.prototype.enclose = function (encloseStr) {
    return encloseStr + " " + this + " " + encloseStr;

}

newStr = str.enclose("SLB");


console.log(newStr); // SLB Glorioso SLB

console.log(f.name);

console.log(str.constructor);

var a = [];

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.keys(Array));

showProperties(Array);

function showProperties(obj) {
    console.log("Properties for " + obj);
    for(var k in obj) {
        console.log(k);
    }

}