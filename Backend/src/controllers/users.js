const User = require("../db/models/User");
const admin = require("../../config/firebase/admin");
const ServerError = require("../helpers/ServerError");
const { isUserObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

//Get one user by ID
exports.getUserById = async (req, res, next) => {
    try {
        if (!isUserObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const user = await User.findOne({ _id: req.query.id });
        if (!user) throw new ServerError("user not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Get user by email
exports.getUserByEmail = async (req, res, next) => {
    try {
        if (!req.query.email || typeof req.query.email !== "string") throw new ServerError("email is invalid", 400);

        const user = await User.findOne({ email: req.query.email });
        if (!user) throw new ServerError("user not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Create a user
exports.createUser = async (req, res, next) => {
    try {
        if (!req.body.email || typeof req.body.email !== "string") throw new ServerError("email is invalid", 400);
        if (!req.body.password || typeof req.body.password !== "string") throw new ServerError("password is invalid", 400);
        if (!req.body.displayName || typeof req.body.displayName !== "string") throw new ServerError("displayName is invalid", 400);

        // Check if email already exists
        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail != null) throw new ServerError("email already exists", 409);

        const firebaseResult = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            disabled: false
        });
        const newUser = new User({
            _id: firebaseResult.uid,
            email: req.body.email,
            displayName: req.body.displayName,
        });
        const createdUser = await newUser.save();
        res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
};
