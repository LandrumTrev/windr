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

        var userData = req.body;
        // console.log(userData);

        // GENERATE matchDiffArray TO HOLD ALL USER-TO-friend MATCH SCORES
        // =============================================================
        // create matchDiffsArray to hold a single number for each object in friends,
        // that number being the total numeric difference between user and each friend
        // (sum of all individual question differences), lower number = less differences
        matchDiffsArray = [];

        // loop through the length of the friends array
        // each loop will compare userScores array to one friends[k].scores array
        for (let k = 0; k < friends.length; k++) {

            // the .scores array from a friends object
            var friendScores = friends[k].scores;
            // console.log(friendScores);

            // the .scores array from the user
            var userScores = userData.scores;
            // console.log(userScores);

            // an array that will hold user-friend difference scores for each anwser
            // each number is the absolute (non-negative) difference between same answer
            var diffArray = [];

            // while we're converting the userScores strings into numbers,
            // let's create an new array for them that we can push into friends later
            var userScoresNumbers = [];

            // loop through the length of the userScores array (one loop for each answer)
            for (let i = 0; i < userScores.length; i++) {

                // set a variable for each answer's score in the userScores array
                // use parseInt to turn the JSON's string numbers into Numbers
                var userAnswer = parseInt(userScores[i]);
                // console.log(userAnswer);

                // .push converted userScores numbers into userScoresNumbers array
                // so we can .push that as .score data into the friends array
                userScoresNumbers.push(userAnswer);

                // set a variable for the same answer's score in the friendScores array
                var matchAnswer = friendScores[i];
                // console.log(matchAnswer);

                // and use Math.abs to get the absolute (non-negative) value
                // of the difference between a question's userAnswer and matchAnswer
                var diffAnswer = Math.abs(userAnswer - matchAnswer);
                // console.log("diffAnswer " + diffAnswer);

                // and then .push each answers difference into an array
                // of all answer differences between the user and one compared friend
                diffArray.push(diffAnswer);

            }
            // and then console the diffArray for each user-friend comparison looped 
            // console.log(diffArray);

            // then take each diffArray and add its numbers together into a single value
            // this is the difference score number for each user-friend comparison
            var diffSum = diffArray.reduce((a, b) => a + b, 0);
            // console.log(diffSum);

            // take all diffSum comparison scores and push them into the matchDiffsArray
            // this is an array of all difference scores between the user and all friends
            matchDiffsArray.push(diffSum);

        }
        // console matchDiffsArray to check it
        // console.log(matchDiffsArray);

        // console the converted numbers userScoresNumbers array 
        console.log(userScoresNumbers);

        // =============================================================


        // then find the lowest number in matchDiffsArray (least differences, best match)
        var matchNumber = Math.min(...matchDiffsArray);
        // console.log("matchNumber " + matchNumber);

        // loop through the length of matchedDiffsArray
        // which is the same length as the friends array
        for (let k = 0; k < matchDiffsArray.length; k++) {

            // create a variable for each matchDiffsArray score
            var matchFinder = matchDiffsArray[k];
            // console.log("matchFinder " + matchFinder);

            // create a variable for each friend
            var matchFriend = friends[k];
            // console.log(matchFriend);

            // if matchNumber (lowest number in matchDiffsArray) equals
            // a (the first matching) number in the matchDiffsArray,
            if (matchNumber === matchFinder) {

                // then console the same numbered array object from the friends array
                console.log(matchFriend);

                // then return the matchFriend object as the value of the function
                res.json(matchFriend);

                // and push the new user's info into the friends array
                // using the array of converted .score Numbers (not JSON String numbers)
                friends.push({
                    name: userData.name,
                    photo: userData.photo,
                    scores: userScoresNumbers
                });

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
