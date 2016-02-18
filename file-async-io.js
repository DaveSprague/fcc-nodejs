var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err,data) {
    if (err) throw err;

    var lineArray = data.split('\n');
    console.log(lineArray.length - 1);
});

