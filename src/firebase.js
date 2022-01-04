import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpHqjJbnROhRA6U9qzHyYUyDDR9Ga4F0M",
  authDomain: "tinder-clone-5a8b2.firebaseapp.com",
  projectId: "tinder-clone-5a8b2",
  storageBucket: "tinder-clone-5a8b2.appspot.com",
  messagingSenderId: "390696597415",
  appId: "1:390696597415:web:ddfbd9e0bc0c40d72b6882",
};

const app = firebase.initializeApp(firebaseConfig);

const database = app.firstore();

export default database;
