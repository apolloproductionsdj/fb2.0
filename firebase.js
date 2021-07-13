import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBS8UxPz-tWJoUN-fY9yprFRLYCTzLcUpM",
    authDomain: "facebook-2-96908.firebaseapp.com",
    projectId: "facebook-2-96908",
    storageBucket: "facebook-2-96908.appspot.com",
    messagingSenderId: "84344132410",
    appId: "1:84344132410:web:56b9a6e4545b88b4edf603"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };