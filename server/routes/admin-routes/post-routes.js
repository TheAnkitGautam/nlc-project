const router = require('express').Router();
const PostModel = require('../../models/post');

// add a new post
router.post('/add', async (req, res) => {
    const post = new PostModel(req.body);
    await post.save();
    res.status(200).json(post);
})
