const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    subTitle1: {
        type: String,
        required: true
    },
    subTitle2: {
        type: String,
        required: true
    },
    englishRules: {
        type: Array,
        default: []
    },
    hindiRules: {
        type: Array,
        default: []
    },
})

module.exports = mongoose.model("Rule", RuleSchema);