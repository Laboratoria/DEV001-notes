import React, {useState}  from 'react';
import { useNavigate } from "react-router-dom";
// import { auth, onAuthStateChanged } from '../Firebase/Configuracion';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { funcSignOut } from "../Firebase/func"
// import { useState } from "react";
// import './styles/App.css';


// const Notes = () => <h1>Estamos en notes</h1>;
const Notes = () => {
    let [name, setName] = useState('');
    const auth = getAuth();
    onAuthStateChanged (auth,(user) => {
      // console.log(user);
      const displayName = user.displayName;
      if (displayName !== null) {
           setName(displayName) 
      } else {
        console.log('Hola mundo!')
      }
    //   console.log(displayName, 'displayname');
    //  const uid = user.uid
    //  console.log(uid, 'uid');
      
    }) 

    const navigate = useNavigate();
    const logOut = () => {
      funcSignOut (auth).then(() =>{
        console.log("Sesión cerrada con exito");
        navigate('/')

      }).catch((error) =>{
        console.error(error)
      })
}
return (
  <React.Fragment>
  <h2 className='titulo' >Bienvenida {name}!</h2>
  <div className='container'>
   <textarea className='note'></textarea>
   <button onClick={logOut}> Cerrar sesión</button>
 </div>
</React.Fragment>

)
}
export default Notes;