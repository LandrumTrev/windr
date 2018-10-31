// =====================================================
// Windr Node.js and Express personality-matching survey
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// =====================================================
// SERVER.JS
// =====================================================


// DEPENDENCIES
// =============================================================
var express = require("express");
var path = require("path");


// EXPRESS SERVER
// =============================================================
var app = express();

// process.env.PORT lets Heroku determine the default port
var PORT = process.env.PORT || 3000;

// allow Express server to accept URL encoded data,
// extended to also allow URL encoded JSON objects and arrays
app.use(express.urlencoded({ extended: true }));

// allow Express server to accept JSON data (for POSTs)
app.use(express.json());


// SECTION
// =============================================================
