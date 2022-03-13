import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNabZiE8sJW8XzERjEl8wLyKD9Pvfr2VE",
    authDomain: "g20-projects.firebaseapp.com",
    databaseURL: "https://g20-projects-default-rtdb.firebaseio.com",
    projectId: "g20-projects",
    storageBucket: "g20-projects.appspot.com",
    messagingSenderId: "857593510625",
    appId: "1:857593510625:web:8b86bcb8e0988db62f15a0",
    measurementId: "G-Q5YNS9QT07"
});

var db = firebaseApp.firestore();

export { db };