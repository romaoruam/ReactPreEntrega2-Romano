import React from 'react';

function ProductFilter({ onSelectCategory }) {
  const handleChange = (event) => {
    onSelectCategory(event.target.value); // Notificar al padre sobre la selección
  };

  return (
    <div className="mb-3">
      <label htmlFor="categoryFilter" className="form-label">Filtrar Productos</label>
      <select id="categoryFilter" className="form-select" onChange={handleChange}>
        <option value="Todos">Todos</option>
        <option value="clasicos">Clásicos</option>
        <option value="premium">Premium</option>
      </select>
    </div>
  );
}

export default ProductFilter;
