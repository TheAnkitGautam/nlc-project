const router = require('express').Router();
const ensureAdminAuth = require('../middlewares/ensureAdminAuth');
const AdminModel = require('../models/admin');
const SubscriberModel = require('../models/subscriber');
const PostModel = require('../models/post');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const savedUser = await AdminModel.findOne({ username })

        if (!savedUser) {
            return res.status(200).json({ type: "error", msg: "Invalid username or password" });
        }

        const passwordDoMatch = await bcrypt.compare(password, savedUser.password)

        if (passwordDoMatch) {
            const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
            return res.status(200).json({
                type:'success',
                msg: "Login successful",
                token,
            });
        } else {
            return res.status(200).json({ type: "error", msg: "Invalid username or password" });
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login/success', ensureAdminAuth, (req, res) => {
    const { name, username } = req.user;
    return res.status(200).json({ name, username });
});

router.get('/subscribers-list', ensureAdminAuth, async (req, res) => {
    try {
        const subscribersList = await SubscriberModel.find({});
        return res.status(200).json(subscribersList);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/add-post', ensureAdminAuth, async (req, res) => {
    const { category, title, imgUrl, instaUrl } = req.body;
    try {
        const existingPost = await PostModel.findOne({ category });
        if (existingPost) {
            existingPost.postList.push({ title, imgUrl, instaUrl });
            await existingPost.save();
            return res.status(200).json({ msg: "Post added successfully" });
        } else {
            const newPost = new PostModel({
                category,
                postList: [{ title, imgUrl, instaUrl }]
            });
            await newPost.save();
            return res.status(200).json({ msg: "Post added successfully" });
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/get-content', async (req, res) => {
    try {
        const posts = await PostModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ type: "error", text: "Error fetching content" });
    }
})

module.exports = router;