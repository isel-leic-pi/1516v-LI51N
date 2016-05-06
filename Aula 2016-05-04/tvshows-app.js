'use strict'

var tvshows = require('./tv-shows');


let showIds = process.argv[2].split(",");


tvshows.getShows(showIds, processShows);



function processShows(err, shows) {
    if(err) {
        console.error(err);
        return;
    }
    
    console.log(shows);
}






