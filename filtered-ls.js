var fs = require('fs');
var path = require('path');

//console.log(process.argv);

var ext = '.' + process.argv[3];
var filteredFiles;
fs.readdir(process.argv[2], function(err,flist) {
    if (err) throw err;
    //console.log(flist);
    filteredFiles = flist.filter(function(value){
	return path.extname(value) === ext;
    });
filteredFiles.forEach(function(val){
    console.log(val);
});
});

//filteredFiles.forEach(function(val){
//  console.log(val);
//});

