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


// =============================================================

var scoresArray = [];

for (let h = 0; h < friends.length; h++) {

  var aFriend = friends[h].scores;
  // console.log(aFriend);

  scoresArray.push(aFriend);

}
// console.log(scoresArray);

// =============================================================

matchDiffsArray = [];

for (let k = 0; k < scoresArray.length; k++) {

  var userScores = a4;
  // console.log("userScores");
  // console.log(userScores);

  var friendScores = scoresArray[k];
  // console.log("friendScores");
  // console.log(friendScores);

  var diffArray = [];

  for (let i = 0; i < userScores.length; i++) {

    var userAnswer = userScores[i];
    // console.log("userAnswer " + userAnswer);

    var matchAnswer = friendScores[i];
    // console.log("matchAnswer " + matchAnswer);

    var diffAnswer = Math.abs(userAnswer - matchAnswer);
    // console.log("diffAnswer " + diffAnswer);
    diffArray.push(diffAnswer);

  }
  // console.log(diffArray);

  var diffSum = diffArray.reduce((a, b) => a + b, 0);
  // console.log(diffSum);

  matchDiffsArray.push(diffSum);

}

console.log("matchDiffsArray " + matchDiffsArray);

var theMatch = Math.min(...matchDiffsArray);
console.log("theMatch " + theMatch);

for (let k = 0; k < matchDiffsArray.length; k++) {

  var matchFinder = matchDiffsArray[k];
  // console.log("matchFinder " + matchFinder);

  var matchName = friends[k].name;
  // console.log("matchName " + matchName);

  if (theMatch === matchFinder) {

    console.log("matchName " + matchName);

  }

}