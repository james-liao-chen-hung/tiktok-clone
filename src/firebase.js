import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADWke-U26xqnuyfeljmfdtZXO1k0yZqRo",
    authDomain: "tiktok-clone-791e1.firebaseapp.com",
    databaseURL: "https://tiktok-clone-791e1.firebaseio.com",
    projectId: "tiktok-clone-791e1",
    storageBucket: "tiktok-clone-791e1.appspot.com",
    messagingSenderId: "5988627291",
    appId: "1:5988627291:web:b35e2d524249ec38fe207e",
    measurementId: "G-W4RMP54W93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();

export default db;