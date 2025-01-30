import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../../shared/shared.css";
import UserMenu from "./UserMenu";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic fuera
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Cerrar el menú cuando se haga clic fuera
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar el menú al seleccionar una opción
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-mobile">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div className="logo">
        <Link to="/" onClick={handleMenuClick}><span>SIMA</span>VISIÓN RADIO</Link>
      </div>
      <div className="menu-dropdown">
        <UserMenu />
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu" ref={menuRef}>
          <ul>
            <li><Link to="/shows" onClick={handleMenuClick}>Programas</Link></li>
            <li><Link to="/news" onClick={handleMenuClick}>Noticias</Link></li>
            <li><Link to="/contact" onClick={handleMenuClick}>Contacto</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderMobile;
