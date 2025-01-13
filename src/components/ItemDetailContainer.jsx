import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../mockProducts';

function ItemDetailContainer() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px' }} />
      <p>{product.description}</p>
      <p><strong>Precio: ${product.price}</strong></p>
    </div>
  );
}

export default ItemDetailContainer;
