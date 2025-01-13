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

        {/* Productos: Lista de todos los productos */}
        <Route path="/productos" element={<ItemListContainer greeting="Nuestros Productos" />} />

        {/* Categorías: Filtrado por categoría */}
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos por Categoría" />} />

        {/* Detalle del producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Ruta para manejar errores */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
