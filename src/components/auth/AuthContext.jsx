import { createContext, useState, useEffect } from "react";

// Crear los contextos
export const AuthContext = createContext({});
export const UserContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
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
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <UserContext.Provider value={user || {}}> {/* 🔥 Siempre tiene un valor */}
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider ;
