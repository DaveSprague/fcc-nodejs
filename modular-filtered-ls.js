var fs = require('fs');
var path = require('path');

var mymodule = require('./mymodule.js');

//console.log(process.argv);
var dirname = process.argv[2];
var ext = process.argv[3];

mymodule(dirname, ext, function(err, filteredFiles) {
  if (err) return console.log("error");
  filteredFiles.forEach(function(val){
    console.log(val);
    });
});
