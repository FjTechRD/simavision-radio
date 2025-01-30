import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./shared.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de enlaces */}
        <div className="footer-links">
          <Link to="/privacy-policy">Políticas de Privacidad</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/terms">Términos y Condiciones</Link>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} SIMAVISIÓN RADIO. Diseñado por <a href="https://fjtechrd-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">FjTechRD</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
