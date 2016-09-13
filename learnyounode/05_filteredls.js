const fs = require('fs');
const path = require('path');

const extension = '.' + process.argv[3];

// read directory
fs.readdir(process.argv[2], function(err, list) {
  if (!err) {
    // loop through file names
    list.forEach(function(fileName){
      // check to see if the extensions are equal
      if (path.extname(fileName) === extension) {
        // if equal, output the entire filename
        console.log(fileName);
      }
    });
  }
});
