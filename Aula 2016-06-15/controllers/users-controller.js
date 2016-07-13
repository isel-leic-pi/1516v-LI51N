var passport = require('passport');



function setupPassport(userManager) {

    let LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log("username %s is being validated with password %s", username, password);
            userManager.validateUser(username, password, (err, user) => {
                console.log("user valid %j", user);
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }

                console.log("user valid %j", user);
                return done(null, user);
            });
        }
    ));


    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(err, user);

    });
}
/**
 * Module that handles endpoints related to user management, and authentication
 */




module.exports = function(userManager) {


    const router = require('express').Router();


    router.get('/login', function (req, rsp, next) {
        rsp.render("login");
        
    });

    // router.post('/login', function (req, rsp, next) {
    //     let username = req.body.username;
    //     userManager.validateUser(username, req.body.password, (err, valid) => {
    //         if(!valid) {
    //             return rsp.render("login", { username: username, error: "Invalid username or password"});
    //         }
    //
    //     })
    //
    // });
    router.post('/login',
        passport.authenticate('local', { successRedirect: '/notes',
            failureRedirect: '/users/login',
            failureFlash: false })
    );
    
    setupPassport(userManager);

    return {
        router: router,
        passport: passport
    };
}