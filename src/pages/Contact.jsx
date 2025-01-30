import React, { useState } from "react";
import "../style/pages/Contac.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Ocultar mensaje después de 5s
    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes preguntas o sugerencias? Escríbenos y te responderemos lo antes posible.
        </p>
        <div className="contact-details">
          <p>📍 Dirección: Montellano, Puerto Plata, República Dominicana</p>
          <p>📧 Email: contacto@simavisionradio.com</p>
          <p>📞 Teléfono: +1 (809) 555-1234</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>

      {submitted && <p className="success-message">¡Mensaje enviado con éxito!</p>}
    </div>
  );
};

export default Contact;
