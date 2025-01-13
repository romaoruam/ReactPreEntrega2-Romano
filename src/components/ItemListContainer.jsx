import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mockProducts';

function ItemListContainer({ greeting }) {
  const { id } = useParams(); // Categoría seleccionada desde la URL
  const location = useLocation(); // Para detectar si estamos en /productos
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos por categoría o mostrar todos
    if (id) {
      setFilteredProducts(products.filter((product) => product.category === id));
    } else {
      setFilteredProducts(products);
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      {/* Mostrar el menú de categorías solo si estamos en /productos */}
      {location.pathname === '/productos' && (
        <div className="mb-4">
          <label htmlFor="categoryFilter" className="form-label">Filtrar por categoría</label>
          <select
            id="categoryFilter"
            className="form-select"
            onChange={(e) => {
              const selectedCategory = e.target.value;
              if (selectedCategory === 'Todos') {
                setFilteredProducts(products);
              } else {
                setFilteredProducts(products.filter((product) => product.category === selectedCategory));
              }
            }}
          >
            <option value="Todos">Todos</option>
            <option value="clasicos">Clásicos</option>
            <option value="premium">Premium</option>
            <option value="especial">Especial</option>
            <option value="tradicional">Tradicional</option>
          </select>
        </div>
      )}

      {/* Lista de productos */}
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
