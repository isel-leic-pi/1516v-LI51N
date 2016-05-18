'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');



//const notesDal = require('./data-access/local-notes-data');
const notesDal = require('./data-access/notes-server-data');
const notesManager = require('./model/notes-manager')(notesDal);
const notesRouter = require('./controllers/notes-controller')(notesManager);

const exphbs = require("express-handlebars");


let hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () {
            return 'FOO!';
        },
        rel: function (item) {
            return item <= 2 ? ("<b>" + item + "</b>") : item;
        }
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');



app.use(bodyParser.text());
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, 'public')));

app.use('/notes', notesRouter);

const PORT = 3010;

app.listen(PORT, function (err) {
    console.log("Application listening on port " + PORT);
})


