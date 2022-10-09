const router = require("express").Router();
const matches = require("../controllers/matches");

//Get All
router.get("/", matches.getMatches);

//Get One by id
router.get("/getById", matches.getMatchById);

//Get all by user id
router.get("/getByUserId", matches.getMatchesByUserId);

//Create Match
router.post("/create", matches.createMatch);

//Delete Match
router.delete("/delete", matches.deleteMatch);

const matchesRouter = router;
module.exports = matchesRouter;
