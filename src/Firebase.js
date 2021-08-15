import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyABqSllsSD96niHtdRk6fKOn0PQAmC54Sg",
    authDomain: "linkedin-clone-7750f.firebaseapp.com",
    projectId: "linkedin-clone-7750f",
    storageBucket: "linkedin-clone-7750f.appspot.com",
    messagingSenderId: "869901271112",
    appId: "1:869901271112:web:baed39c996b41ddbea587d",
    measurementId: "G-1DXYWE2E40"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

