var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lineArray = str.split('\n');
console.log(lineArray.length - 1);

