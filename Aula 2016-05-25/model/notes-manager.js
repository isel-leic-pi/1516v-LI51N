'use strict'


let notes_dal;

function getAll(cb) {
    console.log("getAll")
    notes_dal.getAll(cb);
}


function getById(id, cb) {
    notes_dal.getById(id, cb);
}


function add(note, cb) {
    if(!note.title) {
        return cb("Title is required in note");
    }
    if(note.id) {
        return cb("New note cannot have an id");
    }
    
    notes_dal.add(note, cb);
}


module.exports =  function (dal) {
    if(!dal) {
        throw "Invalid data access object";
    }

    notes_dal = dal;
    return {
        getAll: getAll,
        getById: getById,
        add: add
        // drop: drop,
        // update: update,
        // insert: insert
    }
}
