// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqWTBMdWknV06WV9Epw37xFEM2FK9WWNA",
    authDomain: "notes-ars.firebaseapp.com",
    projectId: "notes-ars",
    storageBucket: "notes-ars.appspot.com",
    messagingSenderId: "931379818689",
    appId: "1:931379818689:web:ea723ef3fa581617826440"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)