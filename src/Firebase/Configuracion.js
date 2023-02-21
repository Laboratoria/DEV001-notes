
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpzCxT1sLcYPO0PNTQBaUOr1HWIXdh_8",
  authDomain: "labnotes-e1c0f.firebaseapp.com",
  projectId: "labnotes-e1c0f",
  storageBucket: "labnotes-e1c0f.appspot.com",
  messagingSenderId: "438769005645",
  appId: "1:438769005645:web:dce7c17fecd08107899804"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { onAuthStateChanged };
