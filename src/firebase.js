import firebase from "firebase/app";
import "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_E1ISc7p3hl2Q7mubcDEF_vBdgFADFqo",
    authDomain: "buttercupbakery-2aca1.firebaseapp.com",
    projectId: "buttercupbakery-2aca1",
    storageBucket: "buttercupbakery-2aca1.appspot.com",
    messagingSenderId: "1061619409737",
    appId: "1:1061619409737:web:875c66977cae077a7b3098",
    measurementId: "G-WKRRRWPJFG"
  };

firebase.initializeApp(firebaseConfig);

export default (firebase);