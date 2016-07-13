'use strict'



const users = {
    "lfalcao@cc.isel.pt": {
        "username": "lfalcao@cc.isel.pt",
        "password": "SLB",
    }
};



function getUser(username, cb) {
    cb(null, users[username] );
}


module.exports = {
    getUser: getUser
}
