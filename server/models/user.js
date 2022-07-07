const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    eventList: {
        type: Array,
        default: [],
    },
    gender: {
        type: String,
        default: ''
    },
    whatsappNumber: {
        type: String,
        default: ''
    },
    instaUrl: {
        type: String,
        default: ''
    },
    instituteName: {
        type: String,
        default: ''
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);