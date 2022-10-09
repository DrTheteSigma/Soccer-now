const router = require("express").Router();
const users = require("../controllers/users");

//Get All
router.get("/", users.getUsers);

//Get One by id
router.get("/getById", users.getUserById);

//Get One by email
router.get("/getByEmail", users.getUserByEmail);

//Create
router.post("/create", users.createUser);

const usersRouter = router;
module.exports = usersRouter;
