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
  <div class="top-menu">
    <span class="current-time">Сьогодні {{ currentTime }}</span>
    <span class="active-sessions">Active Sessions: {{ activeSessions }}</span>
  </div>
</template>

<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #f1f1f1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.current-time,
.active-sessions {
  margin-left: 15px;
  font-size: 14px;
  font-weight: bold;
}
</style>
