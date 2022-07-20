const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postList: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Post", postSchema);