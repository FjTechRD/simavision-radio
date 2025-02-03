Simavision Radio 🎧📻

Simavision Radio es una plataforma de radio en línea desarrollada con React en el frontend y Node.js con Express en el backend. Ofrece a los usuarios la posibilidad de escuchar la radio en vivo, interactuar mediante un chat y gestionar cuentas de usuario.

🚀 Tecnologías Utilizadas

📌 Frontend

React con Vite ⚡

React Router

Context API para la gestión de autenticación

CSS puro para el diseño

Fetch API para la comunicación con el backend

📌 Backend

Node.js con Express

MongoDB Atlas como base de datos

Mongoose para la gestión de datos

Bcrypt.js para la seguridad de contraseñas

JSON Web Tokens (JWT) para la autenticación

WebSockets para el chat en tiempo real

📌 Características Principales

✅ Reproductor de radio en vivo integrado mediante iframe.
✅ Registro e inicio de sesión de usuarios con JWT.
✅ Modo oscuro/claro con almacenamiento en local.
✅ Chat en tiempo real para la interacción de los oyentes.
✅ Sección de programación para ver los programas en curso.
✅ Diseño responsivo para desktop y móvil.

📥 Instalación y Configuración

1️⃣ Clonar el repositorio

git clone https://github.com/FjTechRD/simavision-radio.git
cd simavision-radio

2️⃣ Instalar dependencias

Para el frontend:

cd frontend
npm install

Para el backend:

cd backend
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en el backend con la siguiente configuración:

PORT=5050
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/simavision
JWT_SECRET=tu_secreto
CLIENT_URL=http://localhost:5173

4️⃣ Iniciar la aplicación

Ejecutar el backend:

cd backend
npm run dev

Ejecutar el frontend:

cd frontend
npm run dev

La aplicación estará disponible en http://localhost:5173/

📌 Endpoints del Backend

🔹 Autenticación

POST /api/auth/register → Registro de usuarios

POST /api/auth/login → Inicio de sesión

🔹 Usuarios

GET /api/users/me → Obtener perfil del usuario autenticado

🔹 Chat

GET /api/chat/messages → Obtener mensajes del chat

POST /api/chat/send → Enviar mensaje

📌 Estado Actual y Mejoras Futuras

🚀 Estado: En desarrollo.

🔜 Futuras mejoras:

Guardado de chats en base de datos.

Panel de administración para gestionar usuarios.

Sección de noticias y novedades.

📜 Licencia

Este proyecto está bajo la Licencia MIT. Puedes modificarlo y distribuirlo libremente.

💡 Desarrollado por FjTechRD - GitHub 🚀
