<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <div class="logo">
        <h1><RouterLink to="/">Quiz App</RouterLink></h1>
      </div>
      <div class="link">
        <ul>
          <li><RouterLink to="/quizes">Quize</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  text-align: center;
  align-items: center;
  background-color: #068da9;

  .logo {
    h1 {
      font-size: 30px;
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
    }
  }
  .link {
    ul {
      display: flex;
      li {
        list-style: none;
        a {
          padding: 0px 10px;
          margin: 0px 10px;
          text-decoration: none;
          font-size: 16px;
          color: white;
        }
      }
    }
  }
}
</style>
