const fs = require('fs');
const path = require('path');

function filtered(directory, extension, callback) {
  var dirlist = fs.readdir(directory, (err, data) => {
    if (err) {
      return callback(err);
    }
    var filteredData = data.filter((line) => {
      return line.match(extension);
    });
    return callback(null, filteredData);
  });
}


module.exports = filtered;
