var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, callback) {
  fs.readdir(dirname, function(err,flist) {
    if (err) return callback(err);
    filteredFiles = flist.filter(function(value){
      return path.extname(value) === ('.' + ext);
      });
    return callback(err, filteredFiles);
    });
}


