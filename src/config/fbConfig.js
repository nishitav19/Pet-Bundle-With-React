import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCs69teMtVUzz3zb0wGVkgsjSNZI9I0w04",
    authDomain: "pet-bundle-1.firebaseapp.com",
    databaseURL: "https://pet-bundle-1.firebaseio.com",
    projectId: "pet-bundle-1",
    storageBucket: "pet-bundle-1.appspot.com",
    messagingSenderId: "492427483620",
    appId: "1:492427483620:web:4a49f19155ec8b5c06cff1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase