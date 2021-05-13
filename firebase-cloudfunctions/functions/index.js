const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.status(200).send("Hello Monkey D. Luffy World !!!");
});

exports.defaultName = functions.firestore
    .document("users/{userId}")
    .onWrite((change) => {
        if (!change.after.exists) {
            return null;
        }
        const { email, displayName, initialized } = change.after.data();
        if (email && !initialized) {
            return change.after.ref.update({
                email: email,
                displayName: !displayName ? "Anonymous" : displayName,
                initialized: true
            });
        }
        return null;
    });