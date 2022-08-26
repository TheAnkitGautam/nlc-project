const router = require('express').Router();
const ensureAuth = require('../middlewares/ensureAuth');
const UserProfileModel = require('../models/user_profile')

// Register for events
router.post('/register', ensureAuth, async (req, res) => {

    const { eventList } = await UserProfileModel.findById(req.body._id).clone()

    if (eventList.includes(req.body.eventName)) {
        res.status(200).json({ type: 'success', text: 'Already registered' })
    } else {
        UserProfileModel.findByIdAndUpdate(req.body._id, { $push: { eventList: req.body.eventName } }, (err, profile) => {
            if (err) {
                res.status(500).json({ type: "error", text: 'Something went wrong.' })
            } else {
                res.status(200).json({ type: "success", text: 'Registered successfully.' })
            }
        }).clone()
    }
})

module.exports = router;