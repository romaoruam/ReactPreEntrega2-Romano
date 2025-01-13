import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../mockProducts';

function ItemListContainer({ greeting }) {
  const [categoryFilter, setCategoryFilter] = useState(''); // Estado para la categoría seleccionada

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      {/* Sección del filtro desplegable */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="form-label">Tipos de Productos</label>
        <select
          id="categoryFilter"
          className="form-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)} // Actualiza el filtro según la selección
        >
          <option value="">Todos</option>
          <option value="clasicos">Clásicos</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      {/* Listado de productos */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <Link to={`/item/${product.id}`} className="text-decoration-none text-dark">
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

