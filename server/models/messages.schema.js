var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  message: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
