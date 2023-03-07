import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { funcSignOut } from './Firebase/func';
// import { FormNotes } from "./componentes/FormNotes";
import { ListNotes } from './componentes/ListNote';

const Notes = () => {
  let [name, setName] = useState('');
  let [uid, setUid] = useState('');
  const auth = getAuth();
  // let uid;
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    uid = user.uid;
    //setUid = user.uid --- buscar el ejemplo de pasar
    console.log(uid, 'uid1');
    const displayName = user.displayName;
    console.log(displayName);
    if (displayName !== null) {
      setName(displayName);
    } else {
      console.log('Hola mundo!');
    }
    // console.log(displayName, 'displayname');
  });
  console.log(uid, 'uid2');

  const navigate = useNavigate();
  const logOut = () => {
    funcSignOut(auth)
      .then(() => {
        console.log('Sesión cerrada con exito');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <h2 className="titulo">Bienvenida {name}!</h2>

      <button className="signOut" onClick={logOut}>
        {' '}
        Cerrar sesión
      </button>

      <ListNotes uid={uid} />
    </React.Fragment>
  );
};
export default Notes;
