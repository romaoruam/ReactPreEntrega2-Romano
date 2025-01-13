import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<div className="container mt-4"><h1>¡Bienvenidos a Altas Cumbres!</h1></div>} />

        {/* Productos */}
        <Route path="/productos" element={<ItemListContainer greeting="Todos los Productos" />} />

        {/* Filtrado por Categorías */}
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos Filtrados" />} />

        {/* Detalle del Producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route path="*" element={<div className="container mt-4"><h2>404 - Página no encontrada</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
