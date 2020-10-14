var im = require('imagemagick');

// im.identify('sample_image.jpg', function (err, info) {
//     if(err) console.log(err);
//     console.log(info);
// })

// im.identify(['-format', ] , function (err, info) {
//     if(err) console.log(err);
//     console.log(info);
// })

// im.resize({
//     srcPath: 'sample_image.jpg',
//     dstPath: 'sample_image_resized.jpg',
//     width:   256
//   }, function(err, stdout, stderr){
//     if (err) throw err;
//     console.log('resized');
// });

im.crop({
    srcPath: 'sample_image.jpg',
    dstPath: 'sample_image_cropped.jpg',
    width: 800,
    height: 600,
    quality: 1,
    gravity: "North"
  }, function(err, stdout, stderr){
    if(err) console.log(err);
});
