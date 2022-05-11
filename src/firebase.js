import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import firebase from '@firebase/app';
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCE2PRBA2xkBVGpl63htfYzXharcfFHb-s",
    authDomain: "clone-5e3e1.firebaseapp.com",
    projectId: "clone-5e3e1",
    storageBucket: "clone-5e3e1.appspot.com",
    messagingSenderId: "128362859113",
    appId: "1:128362859113:web:1a613a80e2ccb7520630f8",
    measurementId: "G-1FC4J12PXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

const auth = getAuth(app);

export { db, auth, analytics, app };