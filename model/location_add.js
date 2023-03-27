const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  url: {
    type: String
  },
  username: {
    type: String
  },
  currenttime: {
    type: String
  },
  deviceid: {
    type: String
  },
  time: {
    type: String
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  },
  locname: {
    type: String
  },
  speed: {
    type: String
  },
  course: {
    type: String
  },
  accuracy: {
    type: String
  },
  battry: {
    type: String
  },
  mock: {
    type: String
  },
  datetime: {
    type: String
  }
});

module.exports = new mongoose.model('location', locationSchema);
