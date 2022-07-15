const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    instaUrl: {
        type: String,
        required: true
    },
    postType: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema);