import React from "react";
import HeaderMobile from "../components/shared/HeaderMobile";
import HeaderDesktop from "../components/shared/HeaderDesktop";

const Header = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      {/* Aquí van las rutas y el contenido */}
    </div>
  );
};

export default Header;
