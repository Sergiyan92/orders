<script setup>
import NavigationMenu from './components/NavigationMenu/NavigationMenu.vue';
import TopMenu from './components/TopMenu/TopMenu.vue';
</script>

<template>
  <div style="display: flex;">
    <TopMenu/>
    <NavigationMenu />    
   
    <router-view />
  </div>
</template>



<style>
/* Глобальні стилі */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>