import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  salirDeCuenta, crearDocumento, lectorDatos,
  borrarPublicación, obtenerUnDocumento, actualizarDatos
}
  from '../../Firebase/Dependencias';

function Muro() {
  const navigate = useNavigate();

  const inputInicial = {
    titulo: '',
    publicacion: '',
  };

  const [valorPublicacion, setvalorPublicacion] = useState(inputInicial);
  const [notas, setNotas] = useState([]);
  const [subId, setsubId] = useState('');
  // console.log(valorPublicacion, 'comprobar de actualizacion')
  const controladorInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value, 'comprobar name y value')
    setvalorPublicacion({ ...valorPublicacion, [name]: value });
  };

  const nuevoSticky = () => {
    document.getElementById('contenedorSticky').style.display = 'block';
  };

  const clickInputPublicacion = async (e) => {
    e.preventDefault();
    /* limpiar input */
    document.getElementById('contenedorSticky').style.display = 'none';

    if (subId === '') {
      try {
        await crearDocumento(valorPublicacion), {
          ...valorPublicacion
            .then((funciona) => {
              console.log(funciona);
            }
            )
        };
      } catch (error) {
        console.log(error);
      }
    }
    else {
      actualizarDatos(subId, valorPublicacion)
 
    }
    setvalorPublicacion({ ...inputInicial })
    setsubId('')
  };

  /* fx para renderizar los nuevos stickys */
  useEffect(() => {
    lectorDatos((result) => {
      // console.log(result);
      setNotas(result);
    },
    );
  }, []);


  const getOne = (id) => {
    obtenerUnDocumento(id).then((post) => {
      document.getElementById('contenedorSticky').style.display = 'block';
      // console.log(post, 'console de post')
      setvalorPublicacion(post.data())
    }).catch((error) => {
      console.log(error)
    });
  };

  // fx para editar documentos
  // Le pregunta si el subId es diferente de vacío, si tiene información retorna al input
  // Se va a renderizar sólo cuando tenga información
  useEffect(() => {
    if (subId !== '') {
      getOne(subId);
    }
  }, [subId]);


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
          <button type='button' id="nuevoSticky"
            onClick={nuevoSticky}>Nuevo Sticky</button>
          <button onClick={cerrar} type="button"
            id="cerrarSesion">Cerrar Sesion</button>
        </aside>
        <div id='contenedorSticky'>
          <div id='sticky'>
            <input name='titulo' value={valorPublicacion.titulo}
              type="text" id='titulosticky'
              onChange={controladorInput}
              placeholder='Título de tu sticky' />
            <textarea name='publicacion' id='inputsticky'
              value={valorPublicacion.publicacion}
              placeholder='¿Qué quieres recordar?'
              onChange={controladorInput} />
            <button onClick={clickInputPublicacion}
              id='publicarpost'>{subId === '' ? 'Publicar' : 'Guardar cambios'}</button>
          </div>

        </div>
        <div id="contenedorNotas">
          <div id="cuerpoNotas">
            {notas.map((nota) => (
              <div key={nota.id}>
                <div id="datosNota">
                  <p id="tituloNota">{nota.titulo}</p>
                  <p id="textoNota">{nota.publicacion}</p>
                  <button id="borrar-editar"
                    onClick={() => borrarPublicación(nota.id)}>Borrar</button>
                  <button id="borrar-editar"
                    onClick={() => setsubId(nota.id)}>Editar</button>
                </div>

              </div>
            ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};
export default Muro;
