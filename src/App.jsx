import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home: Solo muestra un saludo */}
        <Route path="/" element={<div className="container mt-4"><h1>¡Bienvenidos a Altas Cumbres!</h1></div>} />

        {/* Página de productos: Lista de productos con filtro */}
        <Route path="/productos" element={<ItemListContainer greeting="Nuestros Sándwiches" />} />

        {/* Rutas adicionales */}
        <Route path="/sucursal" element={<div>Sucursal (Próximamente: Enlace a Google Maps)</div>} />
        <Route path="/contacto" element={<div>Contacto (Próximamente: Formulario)</div>} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
