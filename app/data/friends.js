// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// friends.js
// =====================================================


// CONFIRM CONNECTION
// =====================================================
console.log("friends.js connected");


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
app.use(express.urlencoded({ extended: true }));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());

// allow Express server to server static files from PUBLIC directory
app.use(express.static('public'));




// DATA
// =====================================================

var friends = [
    {
        "name":"McKenzie",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            3,
            2,
            1,
            5,
            4,
            3,
            2,
            1,
            5,
            4
          ]
      },
      {
        "name":"Bubba",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            4,
            3,
            2,
            1,
            5,
            4,
            3,
            2,
            1
          ]
      },
      {
        "name":"Arkentootz",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
];


// MODULE EXPORT
// =====================================================
module.exports = friends;


// INSTRUCTIONS
// =====================================================
// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// json

// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
