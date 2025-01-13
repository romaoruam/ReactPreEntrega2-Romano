import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
        <Route path="/productos" element={<ItemListContainer greeting="Todos los productos disponibles" />} />
        <Route path="/sucursal" element={<div>Sucursal (Próximamente: Enlace a Google Maps)</div>} />
        <Route path="/contacto" element={<div>Contacto (Próximamente: Formulario)</div>} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
