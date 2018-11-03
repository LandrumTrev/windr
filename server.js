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
app.use(express.static('public'));


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


// MATCH LOGIC
// =============================================================

console.log("\n====== Logical, captain. =======\n");

// TESTING VARIABLES

var rq = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
// console.log(rq);

var a2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
// console.log(a2);

var a3 = [5, 1, 2, 1, 3, 4, 1, 3, 6, 2];
// console.log(a3);

var a4 = [2, 3, 1, 2, 1, 3, 4, 1, 3, 5];
// console.log(a4);

var friends = require("./app/data/friends");
// console.log(friends[0].scores);



// GENERATE matchDiffArray TO HOLD ALL USER-TO-friend MATCH SCORES
// =============================================================
// create matchDiffsArray to hold a number for each object in friends,
// that number being the total numeric difference between user and each friend
// so, lower number = less differences = better match
matchDiffsArray = [];

// loop through the length of the friends array
for (let k = 0; k < friends.length; k++) {

  // the array of user.scores numbers
  var userScores = a4;
  // console.log("userScores");
  // console.log(userScores);

  // the array of a friends array objet's scores
  var friendScores = friends[k].scores;
  // console.log("friendScores");
  // console.log(friendScores);

  // each loop gets the user.scores and one friend's scores arrays

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
    return matchFriend;

  }

}