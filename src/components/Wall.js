import React from 'react';
import { logOut } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../estilos/Wall.module.css';
import WallLink from './wallLink';
import styles from '../estilos/Wall.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function Wall() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await logOut();
        navigate('/')
    };

    return (
        <div className={styles.divprincipal}>
            <div className={styles.container}>
                <h2>Welcome to Notes</h2>
                
            <WallLink />  
          </div>
           <ToastContainer />
        <button onClick={handleSignOut} className={styles.logout}>Logout</button>
    </div>
    
    );
}

export default Wall;

// const cerrarSesion = logOutDiv.querySelector('#buttonLogout');
// cerrarSesion.addEventListener('click', (e) => {
//     e.preventDefault();
//     logOut().then(() => {
//         // Sign-out successful.
//         console.log('siii saliste');
//         onNavigate('/');
//     }).catch(() => {
//         // An error happened.
//         console.log('que mala onda, hubo un error');
//     });
// });