var fs = require('fs');
var filePath = process.argv[2];

var file = fs.readFileSync(filePath);
var fileOuput = file.toString();
var fileOutputArray = fileOuput.split('\n');
var lengthOfFileOutputArray = fileOutputArray.length - 1;

console.log(lengthOfFileOutputArray);

// console.log(process.argv[2]);
