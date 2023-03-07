import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Configuracion';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  // getFirestore, addDocs, getDoc, doc,  setDoc,
} from 'firebase/firestore';
import { FormNotes } from '../componentes/FormNotes';

export function ListNotes() {
  // variables de estado
  // en ese estado vamos a manejar el estado de una nota que esta siendo creada o editada
  const [notaGuardada, setNotaGuardada] = useState({ id: '', textarea: '' });
  const [lista, setLista] = useState([]);
  const [render, setRender] = useState(false); // Se encarga de renderizar

  // Funcion que trae las notas
  const getLista = async () => {
    try {
      // Hace la peticion a la base de datos  (getdocs trae la coleccion de usuario)
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        console.log(docs);
      });
      setLista(docs);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para renderizar lista de usuarios
  useEffect(() => {
    console.log('Renderiza');
    getLista();
    // dependencia de variable de estado
    // agrega elemento a la lista cada que hay un cambio
    setRender(false);
  }, [render]);

  //
  // const unsub = onSnapshot(doc(db, "usuarios"), (doc) => {
  //     console.log("Current data: ", doc.data());
  // });

  // Funcion para eliminar Notas
  const delateNote = async (id) => {
    setRender(true);
    await deleteDoc(doc(db, 'usuarios', id));
  };
  // console.log(uid);

  return (
    <div>
      <FormNotes
        // uid={uid}
        notaGuardada={notaGuardada}
        setNotaGuardada={setNotaGuardada}
      />
      {lista.map((note) => (
        <div key={note.id}>
          <p>{`${note.textarea}`}</p>
          <button className="btn-delate" onClick={() => delateNote(note.id)}>
            Eliminar
          </button>
          <button className="edit" onClick={() => setNotaGuardada(note)}>
            Editar
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}
