const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    cityid: {
        type: String
      },
      name: {
        type: String
      },
      state_cityid: {
        type: String
      }
});

module.exports = new mongoose.model('City', citySchema);
