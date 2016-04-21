
const
    fs = require('fs'),
    filename = process.argv[2];

    if (!filename) {
        throw Error("A file to watch must be specified!"); }



var ws = fs.createWriteStream(filename);

ws.write("SLB\n", function (p1, p2) {
    console.log("callback was caleld with %s %s", p1,p2);
});


console.log("Writing file", filename);












