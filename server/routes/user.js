const router = require('express').Router();
const UserProfileModel = require('../models/user_profile')

router.post('/profile', async (req, res) => {
    if (Object.keys(req.body).length === 1) {
        UserProfileModel.findOne({ googleId: req.body.googleId }, (err, profile) => {
            if (err) {
                res.status(500).json({ error: err })
            } else {
                res.status(200).json(profile)
            }
        })
    } else {
        new UserProfileModel(req.body).save()
            .then(participant => {
                res.status(200).json(participant)
            });
    }
})

module.exports = router;