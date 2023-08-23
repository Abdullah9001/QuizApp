<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Quiz App. All rights reserved.</p>
      <nav class="footer-nav">
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { RouterLink } from "vue-router";

const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-size: 14px;
  margin: 0;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.footer-nav a:last-child {
  margin-right: 0;
}
</style>
