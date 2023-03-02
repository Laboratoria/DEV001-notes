import React, {useEffect, useState} from 'react';
import WallForm from './wallForm';
import { collection, addDoc, query, onSnapshot, deleteDoc, doc, setDoc} from "firebase/firestore";
import styles from '../estilos/Wall.module.css';
import db from "../firebase";
import { toast } from 'react-toastify';

const WallLink = () => {
    // se crea un estado vacio, y cada que getlinks se llena el arreglo notes
    const [notes, setNotes] = useState([]);
    // guardo en el estado en string vacion y se guarda el estado actual y su metodo para actualizarse
    const [currentId, setCurrentId] = useState('');
   
    const addOrEditNote = async (textObject, newfields) => {
        if (currentId === '') {
            // si current id es vacio, entonces agrega una nota
            await addDoc(collection(db, 'notes'), { textObject })
            toast('New note added', {
                type: 'success',
                theme: 'colored',
                autoClose: 1500
            }); 
            // el ese actualiza la nota
        } else {
            await setDoc(doc(db, 'notes', currentId), {textObject});
            toast('Updated note', {
                type: 'info',
                theme: 'colored',
                autoClose: 1500
            }); 
            setCurrentId('');
        } 
    };
// funcion que hace una peticion desde firebase para elminar
    
    const onDeleteNote = async (id) => {
        // realizar una confirmacion de que el usuario quier eliminare la nota
        if (window.confirm('Do you want to delete it?')) {
   
            await deleteDoc(doc(db, 'notes', id));
            toast('Note Removed Successfully', {
                type: 'error',
                autoClose: 1500,
                theme: 'colored'
            })
        }
       
    }
    const onGetNotes = (callback) => {
        const queryNote = query(collection(db, 'notes'));
        onSnapshot(queryNote, callback)
    }
// esta funcion hace una peticion a firebase
    const getNotes = async () => {
        onGetNotes((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            })
        setNotes(docs);
        })
    };
// useEffect cuando cargue el componente hace una peticion a firebase y pinta todos los datos
    
// useEffect tiene una funcion dentro y recibe como segundo parametro un arreglo con los datos que van cambiando
    useEffect(() => {
         getNotes();
        // eslint-disable-next-line
    }, [])

    return (<div className={styles.formnotes}>
        <div>
            <WallForm {...{addOrEditNote, currentId, notes }} />
        </div>
     
        <div className={styles.rendertitleandnote}>
            {(notes || []).map((note) => (
                <div className={styles.rendernote} key={note.id}>
                    <div className={styles.titleanddeleteicon}>
                        <h2>{note.textObject.title}</h2>
                        <div className={styles.icons}>
                            <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="edit icon" className={styles.editicon}
                                // el setcurrent id guarda id el estado actual que se va actualizando
                                onClick={() => setCurrentId(note.id)} />
                        <img src="https://www.shareicon.net/data/2015/12/26/693474_delete_512x512.png" alt="delete icon" className={styles.deleteicon}
                                onClick={() => onDeleteNote(note.id)} />
                        </div>
                    </div> 
                        <p>{note.textObject.description }</p>
                    
              </div>
            ))}
        </div>       
    </div>
    )
};
export default WallLink;