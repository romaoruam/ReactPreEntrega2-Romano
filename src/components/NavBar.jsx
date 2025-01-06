import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para manejar las rutas
import CartWidget from './CartWidget';
import logo from '/src/assets/altas-cumbres-logo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        {/* Logo que redirige a la página principal */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Altas Cumbres" style={{ width: '150px', marginRight: '10px' }} />
        </Link>
        {/* Botón para dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link> {/* Cambiamos Inicio a Productos */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/promociones">Promociones</Link> {/* Enlace nuevo */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/contacto">Contacto</Link> {/* Mantiene Contacto */}
            </li>
          </ul>
        </div>
        {/* Carrito */}
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
