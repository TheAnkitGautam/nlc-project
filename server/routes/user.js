const router = require('express').Router();
const UserModel = require('../models/user')

router.post('/register', async (req, res) => {
    const user = await UserModel.findById(req.body.id)
    console.log(user);
    res.status(200)
})

module.exports = router;