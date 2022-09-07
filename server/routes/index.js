const router = require('express').Router();
const subscriberModel = require('../models/subscriber');
const PostModel = require('../models/post')
const RulesModel = require('../models/rules')

// Subscribe
router.post('/subscribe', async (req, res) => {
    const newSubscriber = new subscriberModel(req.body);

    try {
        await newSubscriber.save();
        res.status(200).json({ msg: "subscribed successfully", color: "green" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(200).json({ msg: "You are already subscribed.", color: "red" });
        }
        res.status(500).json({ msg: "something went wrong", color: "red" });
    }
})

// Get Content
router.get('/getcontent', async (req, res) => {
    try {
        const posts = await PostModel.find({});
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ type: "error", text: "Error fetching content" });
    }
})

// Get Rules
router.post('/getrules', async (req, res) => {
    await RulesModel.findOne({ eventName: req.body.eventName }, (err, rules) => {
        if (err) {
            console.log("Error fetching rules");
            res.status(500).json({ type: "error", text: "Error fetching rules" });
        }
        else {
            if (rules) {
                res.status(200).json(rules);
            } else {
                res.status(404).json({ type: "error", text: "Rules not found" })
            }
        }
    }).clone()
})


module.exports = router;