const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const ServerError = require("./helpers/ServerError");

// Default options
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure routes
const router = require("./routes/router");
app.use("/v1/", router);

// 404 error
app.use((req, res, next) => {
    next(new ServerError("not found", 404));
});

// Error handling
app.use((err, req, res, next) => {
    res.status(err.code || 500);
    // Check if env is development
    if (app.get("env") !== "production") {
        if (app.get("env") === "development") {
            console.log(err);
        }
        res.send(err.message);
    } else res.send("500 Internal server error");
});

module.exports = app;