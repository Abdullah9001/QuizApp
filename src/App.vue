<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
}
</style>
