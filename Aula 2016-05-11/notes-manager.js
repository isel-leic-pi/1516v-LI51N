'use strict'

Object.prototype.values = Object.prototype.values ||
        function (obj) {
            return Object.keys(obj).map(k => obj[k])
        }


const notes = {
    "1": {
        "id": 1,
        "title": "Note1",
        "content": "Note 1 content",
        "tags": ["tag1", "tag2", "tag3"],
        "relevance": 2
    },
    "2": {
        "id": 2,
        "title": "Note2",
        "content": "Note 2 content",
        "tags": ["tag1", "tag2", "tag3"],
        "relevance": 2
    },

    "5": {
    "id": 5,
        "title": "Note2",
        "content": "Note 2 content",
        "tags": ["tag1", "tag2", "tag3"],
        "relevance": 2
}
};



function getAll(cb) {
    console.log("getAll")
    //cb(Object.keys(notes).map(k => notes[k]));
    cb(null, Object.values(notes));
}


function getById(id, cb) {
    cb(notes[id] == undefined ? "Not found" : null, notes[id]);
}


module.exports = {
    getAll: getAll,
    getById: getById,
    // drop: drop,
    // update: update,
    // insert: insert
}
