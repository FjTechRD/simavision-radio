import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/pages/News.css";

const News = () => {
  const [categories, setCategories] = useState([]);
  const [postsByCategory, setPostsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://simavision.tv/wp-json/wp/v2/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
        setError("Error al cargar las categorías.");
      });
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const newPostsByCategory = {};
        await Promise.all(
          categories.map(async (category) => {
            const response = await axios.get(
              `https://simavision.tv/wp-json/wp/v2/posts?categories=${category.id}&per_page=10&_embed`
            );
            newPostsByCategory[category.id] = response.data;
          })
        );
        setPostsByCategory(newPostsByCategory);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
        setError("Error al cargar las noticias.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categories]);

  return (
    <div className="news-page">
      <h1>Noticias SimaVisión Tv</h1>

      {loading && <p className="loading">Cargando noticias...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        !error &&
        categories.map((category, index) => (
          <div key={category.id} className="category-section">
            {/* Encabezado con título de categoría y botón */}
            <div className="category-header">
              <h2>{category.name}</h2>
              <Link to={`/category/${category.id}`} className="view-more">
                Ver más
              </Link>
            </div>

            {/* Lista de noticias */}
            <div className="news-grid">
              {postsByCategory[category.id]?.map((post) => {
                const imageUrl =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

                return (
                  <div key={post.id} className="news-card">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={post.title.rendered}
                        className="news-image"
                      />
                    )}
                    <div className="news-content">
                      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                      <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                      <Link to={`/post/${post.id}`} className="read-more">
                        Leer más
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Separador entre categorías */}
            {index < categories.length - 1 && <hr className="category-divider" />}
          </div>
        ))}
    </div>
  );
};

export default News;