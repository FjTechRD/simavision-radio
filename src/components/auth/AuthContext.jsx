import { createContext, useState, useEffect } from "react";

// Crear los contextos
export const AuthContext = createContext({});
export const UserContext = createContext({});

const API_URL =
  process.env.VITE_API_URL || "https://simavision-radio-backend.onrender.com"; // Valor por defecto

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const data = await response.json();
      console.log("Respuesta de /api/auth/me:", data); // <-- Agrega este log
  
      if (response.ok) {
        setUser(data.user);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Error verificando autenticación:", error);
      logout();
    }
  };
  
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Respuesta del servidor:", data); // <-- Agrega este log
  
      if (response.ok) {
        if (!data.user) {
          console.error("Error: la respuesta no contiene 'user'");
          return;
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      <UserContext.Provider value={user || {}}>{children}</UserContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
