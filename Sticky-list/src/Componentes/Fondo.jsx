import React from 'react';

function Fondo() {
  const validarClick = () => {
    console.log('Click Publicar');
  };

  return (
    <div>
      <h3>Publicar Sticky</h3>
      <button onClick={validarClick} type="button">
        Publicar</button>
    </div>
  );
};
export default Fondo;
