const app = require("./src/app");
const connection = require("./src/db/connection");

// Connect to Mongo database and start express server
connection.once("open", () => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening on port " + server.address().port);
    });
});