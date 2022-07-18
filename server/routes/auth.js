const router = require('express').Router();
const passport = require('passport');
const ensureAuth = require('../middlewares/ensureAuth');

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', {
    successRedirect: `${process.env.CLIENT_URL}`,
    failureRedirect: `${process.env.CLIENT_URL}`
})
);

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json(req.user)
    } else {
        res.status(401).json("Authentication failed")
    }
})

router.get('/logout', ensureAuth, (req, res) => {
    req.logout();
    res.status(200).json('Logout Successfull')
})


module.exports = router;