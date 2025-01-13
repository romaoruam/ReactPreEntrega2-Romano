import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mockProducts';

function ItemListContainer({ greeting }) {
  const { id } = useParams(); // Captura la categoría desde la URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (id) {
      setFilteredProducts(products.filter((product) => product.category === id));
    } else {
      setFilteredProducts(products);
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      {/* Enlaces para las categorías */}
      <div className="mb-4">
        <h5>Categorías</h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/productos">Todos</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/category/clasicos">Clásicos</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/category/premium">Premium</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/category/especial">Especial</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/category/tradicional">Tradicional</Link>
          </li>
        </ul>
      </div>

      {/* Lista de productos */}
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
