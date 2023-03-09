const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    stateid: {
        type: String
      },
      name: {
        type: String
      },
      country_stateid: {
        type: String
      }
});

module.exports = new mongoose.model('State', stateSchema);
