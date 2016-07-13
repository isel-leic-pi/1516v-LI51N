'use strict'


let users_dal;


function validateUser(user, pwd, cb) {
    users_dal.getUser(user, (err, user) => {
        if(err) {
            return cb(err);

        }
        console.log("User %j", user)
        cb(null, (user && pwd == user.password )? user : null);
    });
}


module.exports =  function (dal) {
    if(!dal) {
        throw "Invalid data access object";
    }

    users_dal = dal;
    return {
        validateUser: validateUser,
        // getById: getById,
        // add: add
    }
}
