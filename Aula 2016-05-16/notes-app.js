'use strict'

const app = require('express')();
const bodyParser = require('body-parser');


//const notesDal = require('./data-access/local-notes-data');
const notesDal = require('./data-access/notes-server-data');
const notesManager = require('./model/notes-manager')(notesDal);



app.use(bodyParser.text());
app.use(bodyParser.json());


app.use(function (req, rsp, next) {
    rsp.header("Content-type", "application/json");
    next();

});

app.get('/notes', function (req, rsp, next) {
    notesManager.getAll((err, notes) => {
        if(err) {
            rsp.statusCode = 404;
            rsp.end();
            return;
        }
        rsp.send(JSON.stringify(notes));
    });
});

app.get('/notes/:id', function (req, rsp, next) {
    notesManager.getById(req.params.id, (err, note) => {
        if(err) {
            rsp.statusCode = 404;
            rsp.end();
            return;
        }
        rsp.send(JSON.stringify(note));
    });
});


app.post('/notes', function (req, rsp, next) {
    rsp.send("POST /notes/");
    console.log("Body: %j", req.body);
    console.log(req.body.title);
});

app.put('/notes/:id', function (req, rsp, next) {
    rsp.send("PUT /notes/" + req.params.id);
    console.log("Body: %j", req.body);
});

app.delete('/notes/:id', function (req, rsp, next) {
    rsp.send("DELETE /notes/" + req.params.id);
});



const PORT = 3010;

app.listen(PORT, function (err) {
    console.log("Application listening on port " + PORT);
})


