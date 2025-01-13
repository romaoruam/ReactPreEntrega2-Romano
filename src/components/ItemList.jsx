import React from 'react';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="row mt-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="col-md-4">
            <Item product={product} />
          </div>
        ))
      ) : (
        <p>No hay productos disponibles para esta categoría.</p>
      )}
    </div>
  );
}

export default ItemList;
