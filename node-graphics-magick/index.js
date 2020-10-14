// index.js
var fs = require('fs');
var gm = require('gm');

// Drawing a new image
// gm(300, 300, "#00ff55aa");

// Get Image Data
var gm = require('gm');

// gm("sample_image.jpg").identify(function(err, value){
//     console.log(value);

//     if(err)
//     {
//         console.log(err);
//     }
// });

gm("sample_image.jpg").crop(50, 50, 10, 10, true).write('resized_img_crop1.jpg', function (err, value) {
    if(err) console.log(err);
    console.log(value);
});


