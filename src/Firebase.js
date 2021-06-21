import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdpvRb-5Ep7T9gslvj1spQVevXBj9U-uY",
    authDomain: "todo-80d71.firebaseapp.com",
    projectId: "todo-80d71",
    storageBucket: "todo-80d71.appspot.com",
    messagingSenderId: "176254510912",
    appId: "1:176254510912:web:45065e7a931a59f75afca5",
    measurementId: "G-P4HSTT980F"
});

const db = firebaseApp.firestore();

export default db;