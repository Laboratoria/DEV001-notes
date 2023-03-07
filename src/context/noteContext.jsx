import React, { createContext, useContext, useState } from 'react';
import { db } from '../Firebase/Configuracion';

export const noteContext = createContext();

export function NoteProvider({ children }) {
  // const user ={
  //   login: true,
  // };

  const valorInicial = {
    textarea: '',
  };
  const [subId, setSubId] = useState('');
  const [user, setUser] = useState(valorInicial);

  // NOMBRE DE USUARIO, DISPLAY -----------------------------------

  //     let [name, setName] = useState('');
  //     const auth = getAuth();
  //     onAuthStateChanged (auth,(user) => {
  //       console.log(user);
  //       const displayName = user.displayName;
  //       console.log(displayName);
  //       if (displayName !== null) {
  //           setName(displayName)
  //       } else {
  //         console.log('Hola mundo!')
  //       }
  //     //   console.log(displayName, 'displayname');
  //     //  const uid = user.uid
  //     //  console.log(uid, 'uid');

  //     })

  //     const navigate = useNavigate();
  //     const logOut = () => {
  //       funcSignOut (auth).then(() =>{
  //         console.log("Sesión cerrada con exito");
  //         navigate('/')

  //       }).catch((error) =>{
  //         console.error(error)
  //       })
  // }

  // ---------FUNCION PARA GUARDAR COLECCION DE NOTAS POR USUARIO  -----------------
  // const saveData = async (userUid, {...user}) =>{
  //   try{
  //     await addDoc(collection(db,`notesBy${userUid}`), {
  //       ...user
  //   });
  //   } catch (error) {
  //     console.log('Error al crear coleccion')
  //   }
  // }

  return (
    <noteContext.Provider value={{ user, setUser, db, subId, setSubId }}>
      {children}
    </noteContext.Provider>
  );
}

export const contextoNotas = () => useContext(noteContext);
//hook personalizado
