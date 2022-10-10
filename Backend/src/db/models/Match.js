const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const Match = new mongoose.model("Match", matchSchema);

module.exports = Match;