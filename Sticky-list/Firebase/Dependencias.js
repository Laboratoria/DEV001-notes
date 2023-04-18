import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
}
from 'firebase/auth';
import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    getDoc,
    onSnapshot,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyASlgSQpq4GZs0y46rz7nrncV_CE0wiMro',
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

export const lectorDatos = async(callback) => {
    onSnapshot(collection(db, 'stickypost'), (querySnapshot) => {
        console.log(querySnapshot, 'console del query')
        const documentoRenderizar = [];
        querySnapshot.forEach((doc) => {
            documentoRenderizar.push({...doc.data(), id: doc.id, });
            //AQUÍ SE PODRÍA SACAR USER Y FECHA
            // doc.data() is never undefined for query doc snapshots
        });
        callback(documentoRenderizar)
    });
};

export const crearDocumento = (objetoInput) => {
    return addDoc(collection(db, 'stickypost'), objetoInput);
};

export const obtenerUnDocumento = (id) => {
    return getDoc(doc(db, 'stickypost', id));
};



export const borrarPublicación = (id) => {
    return deleteDoc(doc(db, 'stickypost', id));
};

export const actualizarDatos = async(id, postEditar) => {
    await setDoc(doc(db, 'stickypost', id), postEditar)
}