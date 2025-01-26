import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Obtén las publicaciones
        const response = await axios.get(
          "https://simavision.tv/wp-json/wp/v2/posts"
        );

        // Mapea las publicaciones y agrega el URL de la imagen destacada
        const newsWithImages = await Promise.all(
          response.data.map(async (post) => {
            if (post.featured_media) {
              try {
                const mediaResponse = await axios.get(
                  `https://simavision.tv/wp-json/wp/v2/media/${post.featured_media}`
                );
                return {
                  ...post,
                  featured_image: mediaResponse.data.source_url,
                };
              } catch {
                return { ...post, featured_image: null }; // Si no se encuentra la imagen
              }
            } else {
              return { ...post, featured_image: null }; // Si no hay imagen destacada
            }
          })
        );

        setNews(newsWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar las noticias:", err);
        setError(
          "Hubo un error al cargar las noticias. Por favor, intenta más tarde."
        );
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="loading">Cargando noticias...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="news-section">
      <h2>Últimas Noticias</h2>
      <div className="news-list">
        {news.map((post) => (
          <div key={post.id} className="news-item">
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title.rendered}
                className="news-image"
              />
            )}
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
