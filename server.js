var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

var parser = require('ua-parser-js');
// var parser = new UAParser();


//console.log(parser);

app.get('/' , function(req, res){
  // var ua = parser(req.headers['user-agent']);     // HTTPヘッダよりUser agentを取得
   res.sendFile(__dirname+'/public/index.html');
  // console.log(ua.device);
  // if(ua.device.model!=undefined){
  //   res.sendFile(__dirname+'/public/index.html');
  // }else{
  //   res.sendFile(__dirname+'/p5Practice.html');
  // }
});

io.on('connection',function(socket){
    socket.on('message',function(msg){
        io.emit('message',msg);
    });
    // socket.on('canvassend',function(canvasdata){
    //   io.emit(canvassend,canvasdata);
    // });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});
