var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function(err, data) {
  if (!err) {
    var fileOuput = data.toString();
    var fileOutputArray = fileOuput.split('\n');
    var lengthOfFileOutputArray = fileOutputArray.length - 1;
    console.log(lengthOfFileOutputArray);
  }
});
