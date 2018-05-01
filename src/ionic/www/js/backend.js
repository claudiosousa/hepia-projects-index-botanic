// Initialize Firebase
var config = {
    apiKey: "AIzaSyBweoRmvTFwZXWSSyxzW4821sQa9AyM7XY",
    authDomain: "index-botanic.firebaseapp.com",
    databaseURL: "https://index-botanic.firebaseio.com",
    projectId: "index-botanic",
    storageBucket: "",
    messagingSenderId: "444976965133"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

angular.module('backend.firebase', [])
    .factory('backend', () => {
        return {
            getPlant: (rfidId) =>
                db.collection("plants")
                    .where("rfid", "==", rfidId)
                    .get()
                    .then(doc => {
                        if (doc.empty)
                            throw 'Plante ID (' + rfidId + ') not found';
                        return doc.docs[0].data()
                    })
        }
    });
