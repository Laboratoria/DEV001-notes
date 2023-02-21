import  React  from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../Firebase/Configuracion';
import { funcSignOut } from "../Firebase/func"


// const Notes = () => <h1>Estamos en notes</h1>;
const Notes = () => {
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
  
   

 
  <h2 className='titulo' >Bienvenida name!</h2>
   <div className='note'>  </div>

   <button onClick={logOut}>Cerrar sesión</button>

</React.Fragment>

)
}
export default Notes;