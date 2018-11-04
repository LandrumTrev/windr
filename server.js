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

// require path for use by htmlRoutes
var path = require("path");


// EXPRESS SERVER CONFIG
// =============================================================
// creates a variable for calling the express() server function
var app = express();

// process.env.PORT lets Heroku determine the default port, or use 3000 locally
var PORT = process.env.PORT || 3000;


// INITIALIZE EXPRESS SERVER MIDDLEWARE TO HANDLE URLs AND JSON DATA
// =============================================================
// allow Express server to accept URL encoded data,
// extended to also allow URL encoded JSON objects and arrays
app.use(express.urlencoded({
  extended: true
}));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());

// allow Express server to server static files from PUBLIC directory
// is this needed? for external CSS files?
// app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

// REQUIRE ROUTER PATH FUNCTION MODULES
// =============================================================

// pass in Express module functions (app) to apiRoutes exported function
require("./app/routing/apiRoutes")(app);

// require htmlRoutes which exports a function,
// and pass in Express() module functions as (app) to it
require("./app/routing/htmlRoutes")(app, path);


// START SERVER, CONFIRM LISTENING
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
