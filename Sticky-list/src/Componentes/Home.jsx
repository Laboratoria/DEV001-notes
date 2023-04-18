import React from 'react';

function Fondo() {
  const validarClick = () => {
  };
  console.log('Click Publicar');

  const filtro = () =>{
    console.log('click filtro');
  };
  const nuevoSticky = () =>{
    console.log('click nuevoSticky');
  };
  const cerrar = () =>{
    console.log('click cerrar');
  };
  return (
    <div>
      <header>
        <h1>Sticky List</h1>
      </header>
      <nav id="lateral">
        <div>
          <div onClick={filtro} id="button">Películas</div>
          <div onClick={filtro} id="button">Series</div>
          <div onClick={filtro} id="button">Animé</div>
          <div onClick={filtro} id="button">Ver Todo</div>
        </div>
        <input type="image" src="imagenes\nota.png" id="nuevoSticky"
          onClick={nuevoSticky}></input>
        <button onClick={cerrar} type="button"
          id="cerrarSesion">Cerrar Sesion</button>
      </nav>
      <main><button onClick={validarClick} type="button"
        id="botonGoogle">Publicar</button>
      </main>
    </div>
  );
};
export default Fondo;
