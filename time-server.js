var net = require('net');
var server = net.createServer(function (socket) {
  // socket server logic

  var date = new Date();

  var yyyy = String(date.getFullYear());
  var mm =  String('00'+(date.getMonth() + 1)).slice(-2);     // month returned starts at 0
  var dd =  String('00'+date.getDate()).slice(-2);      // returns the day of month
  var hh =  String('00'+date.getHours()).slice(-2);
  var mn =   String('00'+date.getMinutes()).slice(-2);
  
  socket.end(yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + '\n');

});
server.listen(process.argv[2]);
