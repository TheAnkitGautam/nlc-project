const router = require('express').Router();
const passport = require('passport');
const ensureAuth = require('../middlewares/ensureAuth');
const UserProfileModel = require('../models/user_profile')

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: `${process.env.CLIENT_URL}`,
    failureRedirect: `${process.env.CLIENT_URL}`
})
);

router.get('/login/success', async (req, res) => {
    if (req.user) {
        const { googleId } = req.user;
        const userProfile = await UserProfileModel.findOne({ googleId });
        if (userProfile) {
            res.status(200).json({ profile: userProfile });
        } else {
            res.status(200).json({ user: req.user });
        }
    } else {
        res.status(401).json({ type: "error", text: "Authentication failed" });
    }
})

router.post('/create-profile', ensureAuth, async (req, res) => {
    const { googleId } = req.user;
    const userProfile = await UserProfileModel.findOne({ googleId });

    if (userProfile) {
        res.status(200).json({ type: "success", text: "Account already exists" });
    } else {
        const newUserProfile = new UserProfileModel(req.body);
        await newUserProfile.save();
        res.status(200).json({ type: "success", text: "Account created" });
    }
})

router.get('/logout', ensureAuth, (req, res) => {
    req.logout();
    res.status(200).json('Logout Successfull')
})


module.exports = router;