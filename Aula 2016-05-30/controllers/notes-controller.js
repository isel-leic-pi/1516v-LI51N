'use strict'

var multipartMiddleware = require('connect-multiparty')();

const supportedContentTypes = {
    "text/html": { view: "notes", "contentType": "text/html" },
    "text/csv": { view: "notes-csv", "contentType": "text/csv" }
}

function getViewForRequest(req) {
    const DEFAULT_CONTENT_TYPE = "text/html";
    var accept = (req.header("Accept") || DEFAULT_CONTENT_TYPE).split(",");


    let foundCt;
    var rep = accept.find(ct => foundCt = supportedContentTypes[ct]);


    return foundCt || supportedContentTypes[DEFAULT_CONTENT_TYPE];
}


module.exports = function(notesManager) {
    const router = require('express').Router();

    router.get('/', function (req, rsp, next) {
        notesManager.getAll((err, notes) => {
            if(err) {
                rsp.statusCode = 404;
                rsp.end();
                return;
            }

            let repr = getViewForRequest(req);

        console.log("repr: ", repr);

            rsp.header("Content-type", repr.contentType);
            //rsp.send(JSON.stringify(notes));
            rsp.render(repr.view, { notes: notes, title: 'All notes' });
    });
    });


    router.get('/new', function (req, rsp, next) {
        rsp.render('newNote');
    });

    router.get('/:id', function (req, rsp, next) {
        notesManager.getById(req.params.id, (err, note) => {
            if(err) {
                rsp.statusCode = 404;
                rsp.end();
                return;
            }
            rsp.send(JSON.stringify(note));
        });
    });



    router.post('/', multipartMiddleware, function (req, rsp, next) {
        notesManager.add(
            {
                title: req.body.title,
                content: req.body.content,
                relevance: req.body.relevance
            }, (err, newNote) =>  {
                // Check error
                rsp.redirect("/notes") 
            });
        
        console.log("Body: %j", req.body);

        console.log("Title:" + req.body.title);
        console.log(req.body.content);
        console.log(req.body.relevance);
        console.log(req.files);
    });





    router.put('/:id', function (req, rsp, next) {
        rsp.send("PUT /notes/" + req.params.id);
        console.log("Body: %j", req.body);
    });

    router.delete('/:id', function (req, rsp, next) {
        rsp.send("DELETE /notes/" + req.params.id);
    });

    return router;
}
