// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// htmlRoutes.js
// =====================================================


// CONFIRM CONNECTION
// =====================================================
console.log("htmlRoutes.js connected");


// DEPENDENCIES (NPM MODULES)
// =============================================================
var express = require("express");
var path = require("path");


// MODULE IMPORTS (ROUTES and DATA)
// =============================================================


// EXPRESS SERVER CONFIG
// =============================================================
var app = express();


// EXPRESS SERVER MIDDLEWARE
// =============================================================
// allow Express server to accept URL encoded data,
// extended to also allow URL encoded JSON objects and arrays
app.use(express.urlencoded({
    extended: true
}));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());

// allow Express server to server static files from PUBLIC directory
app.use(express.static('public'));




// HTML ROUTES
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});


// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    // EVERYTHING AFTER THE DOMAIN NAME
    var path = req.url;
    // prints out all paths that get requested to the server
    console.log(path);

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(path, req, res);
            // don't need break here because return, but normally need break;
            break;

        case "/portfolio":
            return displayPortfolio(path, req, res);
            // don't need break here because return, but normally need break;
            break;

        case "/coffee":
            return displayTeapot(path, req, res);
            // don't need break here because return, but normally need break;
            break;

        default:
            return display404(path, req, res);
            // don't need break here because return, but normally need break;
            break;
    }
}




// app.get() handles GET requests that come into the server
// Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
// });



// INSTRUCTIONS
// =====================================================

// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.