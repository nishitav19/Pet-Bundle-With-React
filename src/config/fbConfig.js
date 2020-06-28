import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB-vBhL6eHt6IdLUFFy13VS-KDAWJd6Su8",
    authDomain: "mario-ff5a4.firebaseapp.com",
    databaseURL: "https://mario-ff5a4.firebaseio.com",
    projectId: "mario-ff5a4",
    storageBucket: "mario-ff5a4.appspot.com",
    messagingSenderId: "711642467896",
    appId: "1:711642467896:web:c909e144bc5e5c801820cd",
    measurementId: "G-5RNHM1MW7D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase