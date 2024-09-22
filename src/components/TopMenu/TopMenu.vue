<script>
import { io } from "socket.io-client";

export default {
  data() {
    return {
      currentTime: this.getFormattedTime(),
      activeSessions: 0,
    };
  },
  methods: {
    getFormattedTime() {
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
    },
    updateTime() {
      this.currentTime = this.getFormattedTime();
    },
  },
  mounted() {
    setInterval(this.updateTime, 60000);

    const socket = io("http://localhost:3000");

    socket.on("sessionUpdate", (count) => {
      this.activeSessions = count;
    });
  },
};
</script>

<template>
  <div
    class="d-flex flex-column ms-auto p-2  shadow-sm align-items-end"
  >
    Today <span class="current-time">{{ currentTime }}</span>
    <span class="badge bg-primary">Active Sessions: {{ activeSessions }}</span>
  </div>
</template>


