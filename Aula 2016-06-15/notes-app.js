'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');




const usersDal = require('./data-access/local-users-data');
const notesDal = require('./data-access/local-notes-data');
//const notesDal = require('./data-access/notes-server-data');
const notesManager = require('./model/notes-manager')(notesDal);
const usersManager = require('./model/users-manager')(usersDal);

const notesRouter = require('./controllers/notes-controller')(notesManager);
const usersCongtroller = require('./controllers/users-controller')(usersManager);

const exphbs = require("express-handlebars");


let hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: [
        'views/partials/'
    ],
    helpers: {
        foo: function () {
            return 'FOO!';
        },
        rel: function (item) {
            return item <= 2 ? ("<b>" + item + "</b>") : item;
        }
    }
});

hbs.getPartials().then(function (partials) {
    console.log(partials);
    // => { 'foo/bar': [Function],
    // =>    title: [Function] }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');



app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/", express.static(path.join(__dirname, 'public')));

app.use(usersCongtroller.passport.initialize());

app.use('/notes', notesRouter);
app.use('/users', usersCongtroller.router);

const PORT = 3010;

app.listen(PORT, function (err) {
    console.log("Application listening on port " + PORT);
})


