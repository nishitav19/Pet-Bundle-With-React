import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCGn4nXzq1dgPJjL5ZlCOsNp07w3CNqT6Y",
    authDomain: "pet-bundle-2.firebaseapp.com",
    databaseURL: "https://pet-bundle-2.firebaseio.com",
    projectId: "pet-bundle-2",
    storageBucket: "pet-bundle-2.appspot.com",
    messagingSenderId: "82123602328",
    appId: "1:82123602328:web:b4c2677aa3fac3856f13ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase