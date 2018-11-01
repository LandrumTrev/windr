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


// DATA
// =====================================================

// array to hold compatibility data of all users in "database"
// no actual database; the array in "friends.js" is the database
var friends = [{
        "name": "McKenzie",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
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
        "name": "Bubba",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
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
        "name": "Arkentootz",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
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
    },
    {
        "name": "Camden",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            3,
            4,
            4,
            5,
            5,
            3,
            3,
            2,
            2
        ]
    },
    {
        "name": "Alyssa",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            2,
            2,
            3,
            1,
            5,
            2,
            3,
            1,
            5
        ]
    },
    {
        "name": "HAL 9000",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            2,
            3,
            4,
            5,
            1,
            3,
            3,
            3,
            5,
            2
        ]
    },
    {
        "name": "Mork from Ork",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            3,
            4,
            1,
            2,
            1,
            3,
            4,
            5,
            1,
            2
        ]
    },
    {
        "name": "Babs",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            3,
            2,
            3,
            5,
            4,
            5,
            2,
            1,
            2
        ]
    },
    {
        "name": "Knuckles Johnson",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            4,
            3,
            3,
            1,
            5,
            2,
            4,
            3,
            1,
            5
        ]
    },
    {
        "name": "Alex",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            3,
            4,
            5,
            1,
            2,
            3,
            1,
            2,
            3
        ]
    }
];


// MODULE EXPORT
// =====================================================
module.exports = friends;