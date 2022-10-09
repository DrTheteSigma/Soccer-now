const router = require("express").Router();

const usersRouter = require("./users");
const matchesRouter = require("./matches")

router.use("/users", usersRouter);
router.use("/matches", matchesRouter);

module.exports = router;
