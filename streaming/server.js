var express = require('express');

var app = express(),
  server, 
  STREAMING_SERVER_ACCESS_PORT = process.env.STREAMING_SERVER_ACCESS_PORT || 5001,  //default port
  STREAMING_SERVER_SPIN_UP_PORT = process.env.STREAMING_SERVER_SPIN_UP_PORT || 5001;

var keywords = {};
require('./config/middleware.js')(app, express, keywords);
server = require('./theStreamer.js');
server.set(keywords, STREAMING_SERVER_ACCESS_PORT);
server.start();

module.exports = function(port) {
  var server = app.listen(STREAMING_SERVER_SPIN_UP_PORT || port || PORT); 
  return server;
};

module.exports();
