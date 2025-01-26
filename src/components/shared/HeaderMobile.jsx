import React, { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "../../shared/shared.css";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <header className="header-mobile">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div className="logo">
        <span>SIMA</span>VISIÓN RADIO
      </div>
      <div className="menu-dropdown" onClick={toggleTheme}>
        {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Noticias</li>
            <li>Contacto</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderMobile;
