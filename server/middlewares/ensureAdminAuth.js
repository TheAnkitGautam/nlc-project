const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const AdminModel = require('../models/admin');

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "Please Log in" })
    }
    const token = authorization.replace("Token ", "")
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "Invalid Token" })
        }

        const { _id } = payload
        AdminModel.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}