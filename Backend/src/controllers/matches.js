const Match = require("../db/models/Match");

const ServerError = require("../helpers/ServerError");
const { isUserObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all matches
exports.getMatches = async (_, res, next) => {
    try {
        const matches = await Match.find();
        res.send(matches);
    } catch (error) {
        next(error);
    }
};

//Get one match by ID
exports.getMatchById = async (req, res, next) => {
    try {
        if (!isObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const match = await Match.findOne({ _id: req.query.id });
        if (!match) throw new ServerError("match not found", 404);

        res.send(match);
    } catch (error) {
        next(error);
    }
};

//Get all matches by user id (host)
exports.getMatchesByUserId = async (req, res, next) => {
    try {
        if(!isUserObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const matches = await Match.find({hostId: req.query.id})
        res.send(matches);

    } catch (error) {
        next(error);
    }
};

//Create an match
exports.createMatch = async (req, res, next) => {
    try {
        if (!req.body.date) throw new ServerError("date is invalid", 400);
        if (!req.body.location || typeof req.body.location !== "string") throw new ServerError("locaton is invalid", 400);

        const newMatch = new Match({
            date: req.body.date,
            location: req.body.location,
        });
        const createdMatch = await newMatch.save();
        res.status(201).send(createdMatch);
    } catch (error) {
        next(error);
    }
};

exports.deleteMatch = async (req, res, next) => {
    try {
        if (!isObjectIdValid(req.body.id)) throw new ServerError("id is invalid", 400);

        //Check if match exists
        const match = await Match.findOne({_id: req.body.id});
        if (!match) throw new ServerError("match not found", 404);

        await Match.findOneAndDelete({ _id: req.body.id });

        res.status(200).send(match);
    } catch (error) {
        next(error);
    }
};
