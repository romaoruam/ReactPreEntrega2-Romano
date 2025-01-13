import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function ProductFilter({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleSelect = (eventKey) => {
    setSelectedCategory(eventKey);
    onSelectCategory(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedCategory}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Todos">Todos</Dropdown.Item>
        <Dropdown.Item eventKey="Clásicos">Clásicos</Dropdown.Item>
        <Dropdown.Item eventKey="Premium">Premium</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProductFilter;
