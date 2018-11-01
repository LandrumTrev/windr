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
// console.log("apiRoutes.js connected");


// IMPORT DATA
// =============================================================
// import the "friends" data to apiRoutes.js,
// so that the routes below can read and write to it
var friends = require("../data/friends");


// API ROUTES
// =============================================================

module.exports = function (app) {

    // captures URL GET request to: domain/api/friends
    app.get("/api/friends", function (req, res) {
        // returns friends.js data to browser as JSON
        res.json(friends);
    });


    // =====================================================


    // captures URL POST request to: domain/api/friends
    app.post("/api/friends", function (req, res) {

        // app.use(express.json()); middleware allows
        // req.body to accept incoming JSON data as a POST:
        // .push the JSON object (req.body) into the array "friends"
        friends.push(req.body);

        // dev only: return value "true" as JSON to browser
        res.json(true);

        // production: 
        // handles incoming survey results
        // handles compatibility logic
        // return modal with name and photo of match

    });


    // =====================================================


    // dev route: if needed, clears all data from friends.js
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friends.length = [];
        // returns a simple JSON object to browser as confirm message
        res.json({
            ok: true
        });
    });

};
