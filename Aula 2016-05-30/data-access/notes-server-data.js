'use strict'

const http_requests = require("../utils/http-requests");

function extend(defaultObj, toExtendObj) {
    for(var k in defaultObj) {
        if(toExtendObj[k] == undefined) {
            toExtendObj[k] = defaultObj[k];
        }
    }
    return toExtendObj;
}

let API  = new function() {
    var API_HOST = "localhost";
    var API_PORT = 3000;


    this.PATH = function (uri) {
        uri.qs = uri.qs ? '?' + uri.qs : uri.qs;
        extend({path: '/notes', id: '', qs: ''}, uri);

        let uriStr = uri.path + uri.id + uri.qs;
        console.log("uriStr" + uriStr);
        return uriStr;
    }

    this.HOST = function () {
        return API_HOST;
    }

    this.PORT = function () {
        return API_PORT;
    }
}


function createOptions(id) {
    return { host: API.HOST(), port: API.PORT(), path: API.PATH({ path: '/notes/' + (id ? id : "")}) };
}




function getAll(cb) {
    http_requests(createOptions(), cb);

}


function getById(id, cb) {
    http_requests(createOptions(id), cb);
}


module.exports = {
    getAll: getAll,
    getById: getById,
}
