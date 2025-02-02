import { io } from "socket.io-client";

const API_URL =
  process.env.VITE_API_URL || "https://simavision-radio-backend.onrender.com"; // Valor por defecto

export const socket = io(API_URL);
