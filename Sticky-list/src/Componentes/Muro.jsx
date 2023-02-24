import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { salirDeCuenta, crearDocumento } from '../../Firebase/Dependencias';

function Muro() {
  const navigate = useNavigate();

  const inputInicial = {
    titulo: '',
    publicacion: ''
  };

  const [valorPublicacion, setvalorPublicacion] = useState(inputInicial);

  const controladorInput = (e) => {
    const { name, value } = e.target;
   setvalorPublicacion({...valorPublicacion, [name]:value});
  };

  const nuevoSticky = () => {
    document.getElementById('contenedorSticky').style.display = 'block';
  };

  const clickInputPublicacion = (e) => {
    e.preventDefault();
    crearDocumento(valorPublicacion)
    // .then((funciona)=>{
    //   console.log(funciona)
    // })
    console.log(valorPublicacion)
  };


  const filtro = () => {
    console.log('click filtro');
  };

  const cerrar = () => {
    salirDeCuenta().then((resolve) => {
      navigate('/');
    });
  };

  return (
    <div>
      <header>
        <div id="cabeza">
          <p id="userName"> UserName</p>
          <h1 id="titulo">Sticky List</h1>
        </div>
      </header>
      <main>
        <aside id="lateral">
          <button onClick={filtro} type="button" id="button">Películas</button>
          <button onClick={filtro} type="button" id="button">Series</button>
          <button onClick={filtro} type="button" id="button">Animé</button>
          <button onClick={filtro} type="button" id="button">Ver Todo</button>
          <button type='button' id="nuevoSticky" onClick={nuevoSticky}>Nuevo Sticky</button>
          <button onClick={cerrar} type="button" id="cerrarSesion">Cerrar Sesion</button>
        </aside>
        <div id='contenedorSticky'>
          <div id='sticky'>
            <input name='titulo' type="text" id='titulosticky' onChange={controladorInput}
              placeholder='Título de tu sticky' />
            <textarea name='publicacion' id='inputsticky' placeholder='¿Qué quieres recordar?' onChange={controladorInput} />
            {/* <select id="opciones">
              <option selected="true" disabled="disabled">Que Viste</option>
              <option value="filtro">Peliculas</option>
              <option value="filtro">Series</option>
              <option value="filtro">Anime</option>
            </select> */}
            <button onClick={clickInputPublicacion} id='publicarpost'>Publicar</button>
          </div>
        </div>

      </main>
    </div>
  );
};
export default Muro;
