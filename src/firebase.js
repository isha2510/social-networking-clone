import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTPX9T4mI8gJmQlxg8MlfC3rJ8QRQwgU",
  authDomain: "friends-app-79ecb.firebaseapp.com",
  databaseURL: "https://friends-app-79ecb.firebaseio.com",
  projectId: "friends-app-79ecb",
  storageBucket: "friends-app-79ecb.appspot.com",
  messagingSenderId: "216216809505",
  appId: "1:216216809505:web:00f2063e3e285cc2197360",
  measurementId: "G-WTKPHV6M2X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;