import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/pages/FAQs.css";

const faqsData = [
  {
    question: "¿Por qué la radio online es una mejor opción?",
    answer:
      "La radio online ofrece mayor accesibilidad, permitiéndote escuchar desde cualquier parte del mundo sin interrupciones por señal. Además, brinda una programación variada y personalizada.",
  },
  {
    question: "¿Qué ventajas tiene la radio online sobre la radio tradicional?",
    answer:
      "Además de la accesibilidad global, permite una mejor calidad de audio, menor cantidad de publicidad intrusiva y la opción de interactuar en tiempo real con los programas.",
  },
  {
    question: "¿Cómo utilizamos la tecnología para mejorar tu experiencia?",
    answer:
      "Nuestra plataforma está optimizada para cualquier dispositivo, usamos streaming de alta calidad y contamos con funciones interactivas como chat en vivo y recomendaciones personalizadas.",
  },
  {
    question: "¿Cómo puedo contactar con la radio?",
    answer:
      "Si tienes dudas o sugerencias, puedes visitar nuestra página de contacto y escribirnos directamente. Estamos disponibles para responderte.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      {/* Encabezado con llamada a la acción */}
      <div className="faqs-header">
        <h1>Preguntas Frecuentes</h1>
        <p>
          ¿Tienes dudas? Aquí respondemos las preguntas más comunes sobre nuestra radio online.  
          Si no encuentras tu respuesta, <Link to="/contact">contáctanos aquí</Link>.
        </p>
      </div>

      {/* Acordeón de preguntas */}
      <div className="faqs-content">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
