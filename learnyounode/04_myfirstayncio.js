const fs = require('fs');

// read file
fs.readFile(process.argv[2], function(err, data) {
  // convert buffer to string
  const fileOuput = data.toString();
  // count new lines
  console.log(fileOuput.split('\n').length - 1);
});
