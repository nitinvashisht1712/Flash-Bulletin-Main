import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3LkRdOKfIYRw9gQ_hofQU5x9nHyYqFbw",
  authDomain: "auth-244e3.firebaseapp.com",
  projectId: "auth-244e3",
  storageBucket: "auth-244e3.appspot.com",
  messagingSenderId: "531594738894",
  appId: "1:531594738894:web:03199d7b8204f3c401649f",
  measurementId: "G-WD68GN8VWB"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase,db}