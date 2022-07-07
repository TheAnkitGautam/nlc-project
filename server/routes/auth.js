const router = require('express').Router();
const passport = require('passport');

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', {
    successRedirect: `${process.env.CLIENT_URL}/public/register`,
    failureRedirect: "/login/failed"
})
);

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json(
            { user: req.user }
        )
    } else {
        res.status(200).json({
            error: true,
            message: "Login Failed!"
        })
    }
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login Failed!"
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
})

module.exports = router;