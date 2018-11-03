// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// apiRoutes.js
// =====================================================

// CONFIRM CONNECTION
// =============================================================
console.log("apiRoutes.js connected");


// IMPORT DATA
// =============================================================
// import the "friends" data to apiRoutes.js,
// so that the routes below can read and write to it
var friends = require("../data/friends");


// API ROUTES - EXPORT ALL API ROUTES AS A SINGLE FUNCTION
// =============================================================

module.exports = function (app) {

    // captures URL GET request to: domain/api/friends
    app.get("/api/friends", function (req, res) {
        // returns friends.js data to browser as JSON
        res.json(friends);
    });


    // =============================================================


    // captures URL POST request to: domain/api/friends
    app.post("/api/friends", function (req, res) {

        // console.log(req.body);

        // GENERATE matchDiffArray TO HOLD ALL USER-TO-friend MATCH SCORES
        // =============================================================
        // create matchDiffsArray to hold a single number for each object in friends,
        // that number being the total numeric difference between user and each friend
        // (sum of all individual question differences), lower number = less differences
        matchDiffsArray = [];

        // loop through the length of the friends array
        // each loop will compare userScores array to one friends[k].scores array
        for (let k = 0; k < friends.length; k++) {

            // the array of a friends array objet's scores
            var friendScores = friends[k].scores;
            // console.log(friendScores);

            // create a variable to hold the array of req.body.scores
            var userScores = req.body.scores;
            // console.log(userScores);

            // create an array to hold the difference scores for each question
            // each number in the array is the absolute difference between answers
            var diffArray = [];

            // loop through the length of the userScores array
            for (let i = 0; i < userScores.length; i++) {

                // set a variable for each score in the userScores array
                var userAnswer = userScores[i];
                // console.log("userAnswer " + userAnswer);

                // set a variable for the same score in the friendScores array
                var matchAnswer = friendScores[i];
                // console.log("matchAnswer " + matchAnswer);

                // and use Math.abs to get the absolute (non-negative) value
                // of the difference (subtract) between each userAnswer and matchAnswer
                var diffAnswer = Math.abs(userAnswer - matchAnswer);
                // console.log("diffAnswer " + diffAnswer);

                // and then .push each answers difference into an array
                // of all answer differences between the user and compared friend
                diffArray.push(diffAnswer);

            }
            // and then console the diffArray for each user-friend comparison looped 
            // console.log(diffArray);

            // then take each diffArray and add all its numbers together into a single value
            var diffSum = diffArray.reduce((a, b) => a + b, 0);
            // console.log(diffSum);

            // take all diffSum single numbers and push them into the matchDiffsArray
            // this is an array of difference scores between the user and each friend
            matchDiffsArray.push(diffSum);

        }
        // console matchDiffsArray to check it
        // console.log(matchDiffsArray);


        // =============================================================


        // then find the lowest number in matchDiffsArray (least differences, best match)
        var theMatch = Math.min(...matchDiffsArray);
        // console.log("theMatch " + theMatch);

        // loop through the length of matchedDiffsArray
        // which is the same length as the friends array
        for (let k = 0; k < matchDiffsArray.length; k++) {

            // create a variable for each matchDiffsArray score
            var matchFinder = matchDiffsArray[k];
            // console.log("matchFinder " + matchFinder);

            // create a variable for each friend
            var matchFriend = friends[k];
            // console.log(matchFriend);

            // if theMatch (lowest number in matchDiffsArray) equals
            // a (the first matching) number in the matchDiffsArray,
            if (theMatch === matchFinder) {

                // then console the same numbered array object from the friends array
                console.log(matchFriend);

                // then return the matchFriend object as the value of the function
                res.json(matchFriend);

                // push the new user's info into the friends array
                friends.push(userData);

            }

        }

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