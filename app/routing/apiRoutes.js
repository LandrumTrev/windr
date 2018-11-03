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



// LOGIC
// =============================================================

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.

//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**

//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 

//    * The closest match will be the user with the least amount of difference.

// =============================================================

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

//    * The modal should display both the name and picture of the closest match.

// modal code is in the survey.html page