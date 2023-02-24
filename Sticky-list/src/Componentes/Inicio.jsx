import React from "react";
function Inicio() {
    const validarClick = () => {
        console.log('Me hiciste click')
    }
    return (
        <div>
      <h1>Sticky List</h1>
      <img src="/imagenes/logo.png"></img>
      <h2>Bienvenid@!</h2>
      <p>¿Qué historias increíbles has visto últimamente?</p>
      <button onClick={validarClick} type="button">
        Iniciar sesión con Google</button>
    </div>
    );
};
export default Inicio;