<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app">
    <Navbar class="nav" />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  background-color: white;
  .nav {
    position: sticky;
    top: 0;
    left: 0;
  }
  .container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
