import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../mockProducts';

function ItemDetailContainer() {
  const { id } = useParams(); // Obtiene el id del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  return (
    <div className="container mt-4">
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
