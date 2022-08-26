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
},
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
