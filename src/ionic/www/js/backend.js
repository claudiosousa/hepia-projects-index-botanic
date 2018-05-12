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
const db = firebase.database();
//db.settings({ timestampsInSnapshots: true });

angular.module('backend.firebase', [])
    .factory('backend', () => {
        return {
            getPlant: (rfid) =>
                db.ref(`/plants/${rfid}`)
                    .once('value')
                    .then(doc => doc.val())
        }
    });
