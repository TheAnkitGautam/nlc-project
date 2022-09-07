const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true,
        required: true
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
        default: []
    },
    submissions: {
        type: Array,
        default: []
    },
    gender: {
        type: String
    },
    whatsappNumber: {
        type: String
    },
    instaUrl: {
        type: String
    },
    instituteName: {
        type: String
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Userprofile", userProfileSchema)