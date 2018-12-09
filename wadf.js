
var download = require('download-file');

var axios = require('axios');

var backGroundPic = require('wallpaper');

var url = 'https://dog.ceo/api/breeds/image/random';

var options = {
    directory: "./",
    fileName: ""
};

axios.get(url).then(function(response) {
  const image = response.data.message;
  download(image, options, function(err) {
    if (err) throw err;
    backGroundPic.set(options.filename);
  });
});
    
    
 
    
