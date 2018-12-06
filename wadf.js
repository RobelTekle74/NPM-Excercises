
var download = require('download-file');

var axios = require('axios');

var backGroundPic = require('wallpaper');

var url = 'https://dog.ceo/api/breeds/image/random';

var options = {
    directory: "./",
    fileName: ""
};


// const axios = require('axios');
// const wallpaper = require('wallpaper');
// const download = require('download-file');

// const url = 'https://dog.ceo/api/breeds/image/random';

// const options = {
//   directory: '/Users/robika/Desktop/Repos/digitalcrafts/week11/npm-excercises',
//   filename: 'dog.jpg'
// };

// axios.get(url).then(function(response) {
//   const image = response.data.message;
//   download(image, options, function(err) {
//     if (err) throw err;
//     wallpaper.set(options.filename);
//   });
// });

axios.get(url).then(function(response) {
        const image = response.data.message;
        download(image, options, function(err) {
          if (err) throw err;
          backGroundPic.set(options.filename);
        });
    });
    
    
 
    
