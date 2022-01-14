const router = require('express').Router();
const SubsModel = require('../models/subscriber');



// subscriber
router.post("/", async (req, res) => {

    const newSubscriber = new SubsModel(req.body);

    try {

        const saveSubscriber = await newSubscriber.save();
        res.status(200).json({ msg: "subscribed successfully", color: "green" });

    } catch (err) {

        if (err.code === 11000) {
            return res.status(200).json({ msg: "You are already subscribed.", color: "red" });
        }

        res.status(500).json({ msg: "something went wrong", color: "red" });

    }

})

module.exports = router;