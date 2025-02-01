import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../components/auth/AuthContext"; // Asegúrate de tener un contexto de usuario
import { io } from "socket.io-client";
import "../style/components/Chat.css";

const socket = io("http://localhost:5050"); // Cambia esto cuando hagas deploy

const Chat = () => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // Cargar mensajes al inicio
    fetch("http://localhost:5050/api/chat")
      .then((res) => res.json())
      .then((data) => setMessages(data));

    // Escuchar nuevos mensajes en tiempo real
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

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
