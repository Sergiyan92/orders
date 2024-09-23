import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("sessionUpdate", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("sessionUpdate", activeSessions);
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Socket.IO server is running on port 3000");
});
