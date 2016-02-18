var http = require('http');

http.get(process.argv[2], function(response){
  var charCount = 0;
  var fullString = "";
  response.setEncoding('utf8');
  response.on("data", function (data) {
//    console.log(data);
    charCount += data.length;
    fullString += data;
  });

  response.on("end", function () {
    console.log(charCount);
    console.log(fullString);
  });

});
