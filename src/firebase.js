import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPgfF5SKFgjxjSx5Ou96mMqco12T6wWzs",
  authDomain: "linkedin-clone-e965a.firebaseapp.com",
  projectId: "linkedin-clone-e965a",
  storageBucket: "linkedin-clone-e965a.appspot.com",
  messagingSenderId: "1033401417247",
  appId: "1:1033401417247:web:b692286c99bdcbe7f61f2a",
  measurementId: "G-8VEH70K393"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };