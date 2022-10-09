const admin = require('firebase-admin');
const serviceAccount = require("./soccer-game-auth-firebase-adminsdk-lq75p-1a46e075dc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;

