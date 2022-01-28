const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email:{ type: String,
            required: true,
            unique: true }, 
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
})



module.exports = mongoose.model('users', usersSchema)