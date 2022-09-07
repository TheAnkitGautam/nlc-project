<<<<<<< HEAD
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

=======
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

>>>>>>> 83abdb41f583fa44adc1c2fc29f853ed52b448fc
module.exports = mongoose.model("Userprofile", userProfileSchema)