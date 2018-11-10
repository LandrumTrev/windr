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
// console.log("friends.js connected");


// DATA
// =====================================================

// array to hold compatibility data of all users in "database"
// no actual database; the array in "friends.js" is the database
var friends = [{
        name: "Alice",
        photo: "https://vignette.wikia.nocookie.net/disney/images/7/73/Alice_Render.png",
        scores: [
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
        name: "Absolem",
        photo: "http://i.imgur.com/KCVjt.jpg",
        scores: [
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
        name: "Red Queen",
        photo: "https://vignette.wikia.nocookie.net/aliceinwonderland/images/f/ff/2010-Red-queen.jpg",
        scores: [
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
        name: "White Rabbit",
        photo: "http://www.konbini.com/wp-content/blogs.dir/3/files/2016/05/alice-in-wonderland-fantasy-computer-animation-comedy-adventure-film-white-rabbit.jpg",
        scores: [
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
        name: "Mad Hatter",
        photo: "http://imgnn.seoul.co.kr/img/upload/2009/06/23/SSI_20090623104322.jpg",
        scores: [
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
        name: "Tweedledee and Tweedledum",
        photo: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/42/2010/03/alice-in-wonderland-4.jpg",
        scores: [
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
        name: "Mork from Ork",
        photo: "https://media1.tenor.com/images/7b4830ba2dff6426f790b7013782c782/tenor.gif",
        scores: [
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
        name: "HAL 9000",
        photo: "http://www.masterreplicasgroup.com/uploads/1/0/1/0/101078168/hal-full-image-final_2_orig.jpg",
        scores: [
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
        name: "SAL 9000",
        photo: "http://3.bp.blogspot.com/-5dgfkflB8sc/VLQho-aPtiI/AAAAAAAAAi0/VRETsCUScLs/s1600/SAL%2B15201546074.jpg",
        scores: [
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
        name: "Spuds MacKenzie",
        photo: "https://amp.businessinsider.com/images/5897e1646e09a897008b5546-750-563.jpg",
        scores: [
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