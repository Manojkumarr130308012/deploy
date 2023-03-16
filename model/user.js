const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: mongoose.Schema.ObjectId,
        required: false,
    },
    password: {
        type: String,
        required: false,
    }
});

module.exports = new mongoose.model('user', userSchema);
