import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdRmglrEpbD8dot9qGAsiuIAd9HzBs4kA",
  authDomain: "ct-linkedin-clone.firebaseapp.com",
  projectId: "ct-linkedin-clone",
  storageBucket: "ct-linkedin-clone.appspot.com",
  messagingSenderId: "438816506209",
  appId: "1:438816506209:web:6b823a077cd58cebf34520",
  measurementId: "G-BJSSG6Z4JY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
