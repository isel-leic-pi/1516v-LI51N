'use strict'

//
// // Modelo síncrono
// FileWriter fw = new FileWriter("xpto.txt");
// fw.open();
// fw.write("SLB");
// fw.close();
//
//
// // Modelo assíncrono
// FileWriter fw = new FileWriter("xpto.txt");
//
// fw.open(function() {
//     fw.write("SLB", function(err, data) {
//         if(err) {
//
//         }
//
//         fw.close(function () {
//             console.log("file closed");
//         });
//     });
// });


console.log(process.argv);

const
    fs = require('fs'),
    filename = process.argv[2];

    if (!filename) {
        throw Error("A file to watch must be specified!"); }



fs.watch(filename, function (event, filename) {
    console.log("Event %s for file %s", event, filename);
});

console.log("Listening for changes in the file %s", filename);












