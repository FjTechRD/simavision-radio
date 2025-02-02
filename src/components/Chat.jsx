import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext, UserContext } from "../components/auth/AuthContext"; // Asegúrate de importar correctamente el contexto
import { socket } from "../utils/socket"; // Importa la conexión de sockets desde utils
import "../style/components/Chat.css";

const Chat = () => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Cargar mensajes iniciales desde el backend
    fetch(`${import.meta.env.VITE_API_URL}/api/chat`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error cargando mensajes:", err));

    // Escuchar nuevos mensajes en tiempo real
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  useEffect(() => {
    // Auto-scroll a los nuevos mensajes
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (text.trim() === "" || !user) return;

    const messageData = {
      user: user.username,
      text,
    };

    socket.emit("sendMessage", messageData);
    setText("");
  };

  return (
    <div className="chat-content">
      <div className="chat-header">💬 Chat en Vivo</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.user}</strong>: {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Para auto-scroll */}
      </div>
      {user ? (
        <form onSubmit={sendMessage} className="chat-form">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p className="chat-login">🔒 Inicia sesión para chatear</p>
      )}
    </div>
  );
};

export default Chat;
