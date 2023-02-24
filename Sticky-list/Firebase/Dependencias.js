import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, onSnapshot, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyASlgSQpq4GZs0y46rz7nrncV_CE0wiMro",
    authDomain: "stickylist-dev001.firebaseapp.com",
    projectId: "stickylist-dev001",
    storageBucket: "stickylist-dev001.appspot.com",
    messagingSenderId: "405206344603",
    appId: "1:405206344603:web:76fdcf44ddcdc8c16f373e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export const registroGoogle = () => {
    return signInWithPopup(auth, provider);
}

export const salirDeCuenta = async() => {
    await signOut(auth);
};

export const lectorDatos = () => {
    return doc(collection(db, 'sticky'))
};


export const crearDocumento = (objetoInput) => {
    return addDoc(collection(db, "stickypost"), objetoInput)
};


// export const unsub = onSnapshot(doc(db, 'sticky'), (doc) => {
//     console.log("Current data: ", doc.data());
// });