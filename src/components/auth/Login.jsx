import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService"; // Importa la función desde authService.js
import "../../style/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores
  const { setUser } = useContext(AuthContext); // Guarda el usuario en el contexto global
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    const result = await login(email, password);

    if (result.success) {
      console.log("Inicio de sesión exitoso:", result.user);
      setUser(result.user); // Guarda el usuario en el contexto
      navigate("/"); // Redirige a la página de inicio
    } else {
      console.error("Error al iniciar sesión:", result.message);
      setError(result.message); // Muestra el mensaje de error
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Muestra errores */}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
