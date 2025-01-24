import React from "react";

const NewsSection = () => {
  const news = [
    {
      title: "Nueva Música en la Radio",
      description: "Descubre los nuevos lanzamientos musicales de esta semana.",
      link: "#",
    },
    {
      title: "Entrevista con DJ Moon",
      description:
        "Conoce más sobre la carrera y pasión de uno de nuestros DJs.",
      link: "#",
    },
    {
      title: "Top 10 Canciones",
      description:
        "Las canciones más escuchadas de esta semana en nuestra radio.",
      link: "#",
    },
  ];
  return (
    <section className="news-section">
      <h2>Últimas Noticias</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
