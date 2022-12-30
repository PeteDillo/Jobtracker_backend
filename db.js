const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
  connectToDb: function() {
    mongoose.connect(config.URL, { useNewUrlParser: true });
  }
};