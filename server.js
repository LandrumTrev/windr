// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// SERVER.JS
// =====================================================


// DEPENDENCIES (NPM MODULES)
// =============================================================
var express = require("express");


// EXPRESS SERVER CONFIG
// =============================================================
// creates a variable for calling the express() server function
var app = express();

// process.env.PORT lets Heroku determine the default port, or use 3000 locally
var PORT = process.env.PORT || 3000;


// EXPRESS SERVER MIDDLEWARE
// =============================================================
// allow Express server to accept URL encoded data,
// extended to also allow URL encoded JSON objects and arrays
app.use(express.urlencoded({ extended: true }));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());

// allow Express server to server static files from PUBLIC directory
app.use(express.static('public'));


// ROUTER
// =============================================================

// require the file path from server.js to apiRoutes.js
// and pass in (app) which is express(), to the require,
// which allows the anonymous function(app) in apiRoutes.js
// to use the express() server methods
require("./app/routing/apiRoutes")(app);

// same-same with htmlRoutes
require("./app/routing/htmlRoutes")(app);


// START SERVER, CONFIRM LISTENING
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  