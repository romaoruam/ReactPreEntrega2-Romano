import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import products from '../mockProducts';

function ItemListContainer({ greeting }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectCategory = (category) => {
    if (category === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      {/* Menú desplegable para filtrar */}
      <ProductFilter onSelectCategory={handleSelectCategory} />

      {/* Lista de productos */}
      <div className="row mt-4">
        {filteredProducts.map((product) => (
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
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
