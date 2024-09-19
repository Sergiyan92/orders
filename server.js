
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Дозволити підключення з будь-яких джерел (корисно для локальної розробки)
    methods: ["GET", "POST"]
  }
});

let activeSessions = 0;

// Обробка підключення нових клієнтів
io.on('connection', (socket) => {
  activeSessions++; // Збільшуємо кількість активних сесій
  io.emit('sessionUpdate', activeSessions); // Відправляємо новий лічильник всім клієнтам

//   console.log('New client connected. Active sessions:', activeSessions);

  // Обробка відключення клієнта
  socket.on('disconnect', () => {
    activeSessions--; // Зменшуємо кількість активних сесій
    io.emit('sessionUpdate', activeSessions); // Оновлюємо лічильник для всіх клієнтів
    // console.log('Client disconnected. Active sessions:', activeSessions);
  });
});

// Запускаємо сервер на порту 3000
server.listen(3000, () => {
  console.log('Socket.IO server is running on port 3000');
});
