// Imports Node
const http = require('http');

// Import Class
const Controller = require('./core/Controller.js') 

// Get Args
const argument = process.argv.slice(2);
const apiArgument = argument[0];


// HTTP SERVER
http.createServer()
    .listen(() => {
        if (apiArgument) {

            const controller = new Controller({
                axidrawIP: apiArgument
            });

        } else {

            console.log("You must put Axidraw IP Adress in args")

        }
    }
);


