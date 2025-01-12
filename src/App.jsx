import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
        <Route path="/productos" element={<ItemListContainer greeting="Todos los productos disponibles" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

