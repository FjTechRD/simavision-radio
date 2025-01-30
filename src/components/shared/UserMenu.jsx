import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const UserMenu = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null; // ✅ Evitar error si el contexto es undefined

  const { user, logout } = auth;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-menu-container")) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="user-menu-container">
      <button onClick={toggleMenu} className="user-icon">
        👤
      </button>

      {isOpen && (
        <div className="user-dropdown">
          {!user ? (
            <>
              <Link className="user-option" to="/login" onClick={closeMenu}>Iniciar Sesión</Link>
              <Link className="user-option" to="/register" onClick={closeMenu}>Registrarse</Link>
            </>
          ) : (
            <button onClick={logout}>Cerrar Sesión</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
