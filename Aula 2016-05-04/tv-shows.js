'use strict'
function extend(defaultObj, toExtendObj) {
    for(var k in defaultObj) {
        if(toExtendObj[k] == undefined) {
            toExtendObj[k] = defaultObj[k];
        }
    }
    return toExtendObj;
}

let API  = new function() {
    var API_HOST = "api.tvmaze.com";


    this.PATH = function (uri) {
        uri.qs = uri.qs ? '?' + uri.qs : uri.qs;
        extend({path: '/shows', id: '', qs: ''}, uri);

        let uriStr = uri.path + uri.id + uri.qs;
        console.log("uriStr" + uriStr);
        return uriStr;
    }

    this.HOST = function () {
        return API_HOST;
    }
}


let httpReq = require("./http-requests");

module.exports.getShows = function (showIds, cb) {
    let shows = [];

    showIds.forEach(id => httpReq(createOptionsForShowId(id), processShow));


    function createOptionsForShowId(id) {
        return { host: API.HOST(), path: API.PATH({ path: '/shows/' + id}) };

    }

    function processShow(err, show) {
        if(err) {
            return cb(err);
        }

        shows.push(show);
        if(shows.length == showIds.length) {
            cb(null, shows);
        }
    }
}

