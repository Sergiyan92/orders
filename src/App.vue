<script setup>
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import TopMenu from "./components/TopMenu/TopMenu.vue";
</script>

<template>
  <div  class=" p-0">
    <TopMenu />
    <div class="">
      <div class=" ">
        <NavigationMenu />
      </div>
      <!-- <div class="col-md-9">
        <router-view />
      </div> -->
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
