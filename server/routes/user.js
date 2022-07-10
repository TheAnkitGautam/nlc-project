const router = require('express').Router();
const UserModel = require('../models/user')
const UserProfileModel = require('../models/user_profile')

router.post('/profile', (req, res) => {
    UserProfileModel.findOne({ googleId: req.body.googleId })
        .then(participant => {
            if (participant) {
                res.status(200)
            } else {
                new UserProfileModel(req.body).save()
                    .then(participant => {
                        res.status(200).json({ msg: 'Profile created successfully!' })
                    });
            }
        })
})

router.post('/findprofile', async (req, res) => {
    const user = await UserProfileModel.findOne({ googleId: req.body.googleId })
    if (user) {
        const profile = await UserProfileModel.findOne({ googleId: req.body.googleId })
        res.status(200).json({ isProfileCreated: true })
    } else {
        res.status(200).json({ isProfileCreated: false })
    }
})

module.exports = router;