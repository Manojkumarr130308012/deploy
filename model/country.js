const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    countryid: {
    type: String
  },
  sortname: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = new mongoose.model('Country', countrySchema);
