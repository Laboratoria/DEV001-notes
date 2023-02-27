import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import styles from '../estilos/Home.module.css';


export function Home() {

    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignin = async () => {
        await loginWithGoogle();
        navigate('/wall')
    }
    
    return (
        <div className = { styles.divprin}>
            <h1>Notes</h1>
            <img className= { styles.imgnote } src="https://images.vexels.com/media/users/3/146633/isolated/preview/236b135edbfb0ac9504b6a3090866459-nota-adhesiva-azul-con-clip.png" alt='icono de notas'/>
            <p>Get organized, get inspired, remember things
                from the hand of notes</p>
            <button type = 'button' className={styles.btn } onClick={handleGoogleSignin}>Google Login</button>
           

        </div >
    )
    
}

export default Home;