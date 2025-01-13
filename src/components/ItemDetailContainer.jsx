import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../mockProducts';

function ItemDetailContainer() {
  const { id } = useParams(); // Capturar el ID del producto desde la URL
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px', marginBottom: '20px' }} />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
}

export default ItemDetailContainer;
