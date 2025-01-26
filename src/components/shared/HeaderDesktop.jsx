import React from "react";
import "../../shared/shared.css";

const HeaderDesktop = () => {
  return (
    <header className="header-desktop">
      <div className="logo">RadioOnline</div>
      <nav className="desktop-nav">
        <ul>
          <li>Inicio</li>
          <li>Programas</li>
          <li>Noticias</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="menu-dropdown">
        <button className="theme-toggle">🌞 | 🌙</button>
      </div>
    </header>
  );
};

export default HeaderDesktop;
