const mongoose = require('mongoose');


const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("subscriber", subscriberSchema);