<script setup>
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";

const getFormattedTime = () => {
  const now = new Date();
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-GB", options).format(now);
};

const updateTime = () => {
  currentTime.value = getFormattedTime();
};
const currentTime = ref(getFormattedTime());
const activeSessions = ref(0);

onMounted(() => {
  setInterval(updateTime, 60000);
  const socket = io("http://localhost:3000");

  socket.on("sessionUpdate", (count) => {
    activeSessions.value = count;
  });
});
</script>

<template>
  <div class="d-flex flex-column ms-auto p-2 shadow-sm align-items-end">
    Today <span class="current-time">{{ currentTime }}</span>
    <span class="badge bg-primary">Active Sessions: {{ activeSessions }}</span>
  </div>
</template>
