import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams(); // Captura el parámetro :id de la URL

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>ID del producto: {id}</p>
    </div>
  );
}

export default ItemDetailContainer;
