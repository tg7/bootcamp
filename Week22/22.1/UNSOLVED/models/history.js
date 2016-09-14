var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  location: {
    type: String, 
  },
  Date: {
    type: Date
  }
});

var History = mongoose.model('History', HistorySchema);
module.exports = History;