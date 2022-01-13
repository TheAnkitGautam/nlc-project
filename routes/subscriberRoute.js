const router = require('express').Router();
const SubsModel = require('../models/subscriber');



// subscriber
router.post("/", async (req, res) => {

    const newSubscriber = new SubsModel(req.body);

    try {

        const saveSubscriber = await newSubscriber.save();
        res.status(200).json({ success: saveSubscriber });

    } catch (err) {

        if (err.code === 11000) {
            return res.status(200).json({ error: "You are already subscribed." });
        }

        res.status(500).json(err);

    }

})

module.exports = router;