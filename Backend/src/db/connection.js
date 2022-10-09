require("dotenv").config();

const mongoose = require("mongoose");
const database = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error: ")
);

module.exports = connection;
