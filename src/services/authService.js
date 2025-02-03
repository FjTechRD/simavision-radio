const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://simavision-radio-backend.onrender.com"; // Valor por defecto

export const login = async (email, password) => {
  try {
    console.log("Enviando solicitud a:", `${API_URL}/api/auth/login`);
    console.log("Datos enviados:", { email, password });

    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);

    if (response.ok) {
      localStorage.setItem("token", data.token);
      return {
        success: true,
        user: {
          id: data._id || "", // Evita undefined
          username: data.username || "Usuario",
          email: data.email || "",
        },
      };
    } else {
      return { success: false, message: data.message || "Error desconocido" };
    }
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    return { success: false, message: "Error al conectar con el servidor" };
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    return { success: false, message: "Error al conectar con el servidor" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
