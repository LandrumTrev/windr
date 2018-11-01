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
// =====================================================
var path = require("path");


// ROUTES (inside exported function)
// =====================================================

// use module.exports directly on an anonymous function
// pass in (app) which is the express() server module
module.exports = function (app) {

    // captures URL: domain/survey
    app.get("/survey", function (req, res) {
        // routes to domain/survey.html ("public" dir is invisible)
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // use "*" to capture all other URL not specified above
    app.get("*", function (req, res) {
        // routes to domain/home.html ("public" dir is invisible)
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};