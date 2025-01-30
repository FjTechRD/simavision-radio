import React from "react";
import { Link } from "react-router-dom";
import "../../shared/shared.css";
import UserMenu from "./UserMenu";

const HeaderDesktop = () => {
  return (
    <header className="header-desktop">
      <div className="logo"><Link to="/"><span>SIMA</span>VISIÓN RADIO</Link></div>
      <nav className="desktop-nav">
        <ul>
          <Link to="/shows">Programas</Link>
          <Link to="/news">Noticias</Link>
          <Link to="/contact">Contacto</Link>
        </ul>
      </nav>
      <div className="menu-dropdown">
        <UserMenu/>
      </div>
    </header>
  );
};

export default HeaderDesktop;
