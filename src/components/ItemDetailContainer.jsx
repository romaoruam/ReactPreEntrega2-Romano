import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../mockProducts';

function ItemDetailContainer() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-4"><h2>Producto no encontrado</h2></div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>{product.description}</p>
          <p><strong>Precio: ${product.price}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
