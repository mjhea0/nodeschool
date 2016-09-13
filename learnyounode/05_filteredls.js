// gets the fs modules from the node core library
var fs = require('fs');

// console.log(process.argv);

// assigning the third command line argument to a variable
var fileDirectoryPath = process.argv[2];

fs.readdir(fileDirectoryPath, function(error, data) {
  if (!error) {
    var fileNameArray = data;
    for (file of fileNameArray) {
      var extension = file.split('.')[1];
      if (extension === process.argv[3]) {
        console.log(file);
      }
    }
  } else {
    console.log(error);
  }
});
