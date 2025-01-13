import React, { useState } from 'react';
import ProductFilter from './ProductFilter'; // Menú desplegable
import products from '../mockProducts'; // Datos simulados de productos

function ItemListContainer({ greeting }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Maneja el filtrado según la categoría seleccionada
  const handleSelectCategory = (category) => {
    if (category === 'Todos') {
      setFilteredProducts(products); // Mostrar todos los productos
    } else {
      setFilteredProducts(products.filter((product) => product.category === category)); // Filtrar productos
    }
  };

  return (
    <div className="container mt-4">
      {/* Saludo */}
      <h2>{greeting}</h2>

      {/* Menú desplegable */}
      <ProductFilter onSelectCategory={handleSelectCategory} />

      {/* Lista de productos */}
      <div className="row mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
