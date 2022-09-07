const ensureAuth = async (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else
        res.status(401).json("Please login first!")
}

module.exports = ensureAuth;