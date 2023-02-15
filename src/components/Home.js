import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';



export function Home() {

    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignin = async () => {
        await loginWithGoogle();
        navigate('/wall')
    }
    
    return (
        <div>
            <h1 align = 'center'>Notes</h1>
            <h2 align='center'>Lets Get Strated</h2>
            <p align='center'>Get organized, get inspired, remember things
                from the hand of notes</p>
            <button onClick={handleGoogleSignin} align='center'>Google Login</button>
            <img src= '../imagenes/post-verde.png' alt = 'imagen de una nota con un lápiz'/>
        </div >
    )
    
}

export default Home;