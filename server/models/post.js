const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    postList: [
        {
            type: new mongoose.Schema(
                {
                    title: { type: String, required: true },
                    imgUrl: { type: String, required: true },
                    instaUrl: { type: String, required: true },
                },
                { timestamps: { createdAt: true, updatedAt: false } }
            )
        }
    ]
},
    { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Post", postSchema);