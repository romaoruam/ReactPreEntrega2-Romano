import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Productos y categorías */}
        <Route path="/productos" element={<ItemListContainer greeting="Todos los Productos" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Filtrar por Categoría" />} />

        {/* Detalle del producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Otras páginas */}
        <Route path="/sucursal" element={<div>Sucursal (Próximamente: Enlace a Google Maps)</div>} />
        <Route path="/contacto" element={<div>Contacto (Próximamente: Formulario)</div>} />

        {/* Ruta 404 */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
