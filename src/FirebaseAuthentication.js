import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDc07kSJeIqRJTNOZfm6nWV4Kca4udHP-k",
    authDomain: "bugfix-software.firebaseapp.com",
    projectId: "bugfix-software",
    storageBucket: "bugfix-software.appspot.com",
    messagingSenderId: "597319884158",
    appId: "1:597319884158:web:9bd5393aa450497b39a72f",
    measurementId: "G-0LFW55YZYT"
};

const firebaseInit = Firebase.initializeApp(firebaseConfig);

export default firebaseInit;