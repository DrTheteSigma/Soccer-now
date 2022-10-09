const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        match: [ /\S+@\S+\.\S+/, "is invalid" ],
        index: true,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    avatarURI: {
        type: String,
        default: "https://cdn.discordapp.com/embed/avatars/0.png"
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;