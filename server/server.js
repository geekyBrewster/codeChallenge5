var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var port = 5000;

/** ---- Middleware ---- **/
app.use(bodyParser.json());

/** ---- Express Routes ---- */







/** ---- Mongoose Connection ---- **/
var databaseUrl = 'mongodb://localhost:27017/antares';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected to: ', databaseUrl);
});
mongoose.connection.on('error', function(err){
  console.log('mongoose connection error: ', err);
});

/** ---- Serve Static Files ---- **/
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

/** ---- Start Server ---- **/
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), function(){
  console.log('All ears on port: ', app.get('port'));
});
