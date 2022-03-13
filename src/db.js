import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

var firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDNabZiE8sJW8XzERjEl8wLyKD9Pvfr2VE",
    // authDomain: "g20-projects.firebaseapp.com",
    // databaseURL: "https://g20-projects-default-rtdb.firebaseio.com",
    // projectId: "g20-projects",
    // storageBucket: "g20-projects.appspot.com",
    // messagingSenderId: "857593510625",
    // appId: "1:857593510625:web:8b86bcb8e0988db62f15a0",
    // measurementId: "G-Q5YNS9QT07"
    apiKey: "AIzaSyBxnFsZL1P4uoGTLuAhK2Z2E46tN1Ecl9I",
    authDomain: "g20-2022.firebaseapp.com",
    databaseURL: "https://g20-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "g20-2022",
    storageBucket: "g20-2022.appspot.com",
    messagingSenderId: "1013044771539",
    appId: "1:1013044771539:web:2005e1e5bd2d9f6e47f226",
    measurementId: "G-NTFKDE3J7J"
});

var db = firebaseApp.firestore();

export { db };