import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mockProducts';

function ItemListContainer({ greeting }) {
  const { id } = useParams(); // Captura el ID de la categoría desde la URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos según la categoría o mostrar todos
    if (id) {
      setFilteredProducts(products.filter((product) => product.category === id));
    } else {
      setFilteredProducts(products); // Muestra todos los productos
    }
  }, [id]); // Actualiza cuando cambie el ID de la categoría

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
