// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// apiRoutes.js
// =====================================================

// CONFIRM CONNECTION
// =====================================================
console.log("apiRoutes.js connected");


// DEPENDENCIES (NPM MODULES)
// =============================================================
var express = require("express");
var path = require("path");


// MODULE IMPORTS (ROUTES and DATA)
// =============================================================
// var friends = require("../data/friends.js");


// EXPRESS SERVER CONFIG
// =============================================================
var app = express();


// EXPRESS SERVER MIDDLEWARE
// =============================================================
// allow Express server to accept URL encoded data,
// extended to also allow URL encoded JSON objects and arrays
app.use(express.urlencoded({ extended: true }));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());

// allow Express server to server static files from PUBLIC directory
app.use(express.static('public'));



// API ROUTES
// =============================================================

// app.get() handles GET requests that come into the server

// Displays all characters
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


// app.post() handles POST requests that come into the server
// use Postman app to manually send POST requests to server for testing
// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});



// INSTRUCTIONS
// =====================================================

// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

