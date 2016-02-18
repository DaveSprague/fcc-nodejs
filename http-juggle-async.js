var http = require('http');

var urls = process.argv.slice(2,process.argv.length);
var fullStrings = ["", "", ""];
var done = [false, false, false];
var callbacks = [];

Array.prototype.notContains = function(element){
        return this.indexOf(element) === -1;
    };

//console.log("URLS = " + urls);
for (var i = 0; i < 3; i++) {

callbacks[i] = function(i){ return function(response){
    response.setEncoding('utf8');
    response.on("data", function (data) {
      //console.log(i.toString() + ": " + data);
      fullStrings[i] += data
    });

    response.on("end", function () {
      done[i] = true;
      //console.log(i.toString() + ": Done!");
      if (done.notContains(false)) {
        fullStrings.forEach(function(str) {
          console.log(str);
        });
      }
    });
  }};


  http.get(urls[i], callbacks[i](i));
}
