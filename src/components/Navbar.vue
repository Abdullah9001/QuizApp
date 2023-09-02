<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

const navLink = ref(false);

const showNav = () => {
  navLink.value = !navLink.value;
};

// Function to close the navigation menu when clicking outside
const closeNavOnOutsideClick = (event) => {
  if (navLink.value && !event.target.closest(".link")) {
    navLink.value = false;
  }
};

onMounted(() => {
  // Add a click event listener to the document
  document.addEventListener("click", closeNavOnOutsideClick);
});

onBeforeUnmount(() => {
  // Remove the click event listener when the component is unmounted
  document.removeEventListener("click", closeNavOnOutsideClick);
});
</script>

<template>
  <div>
    <nav class="nav">
      <div class="logo">
        <h1><RouterLink to="/">Quiz App</RouterLink></h1>
      </div>
      <div class="link-origin">
        <ul>
          <li><RouterLink to="/quizes">Quize</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div class="link">
        <ul v-if="navLink">
          <li><RouterLink to="/quizes">Quize</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        <img
          @click="showNav"
          class="hamburger"
          src="/src/assets/hamburger.png"
          alt="menu image"
        />
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

  .link-origin {
    display: flex;
    align-items: center;
    .hamburger {
      height: 20px;
      display: none;
    }
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

  .link {
    display: none;
    ul {
      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
    .hamburger {
      height: 20px;
      display: none;
    }
  }

  // Media Query for Mobile
  @media (max-width: 640px) {
    .logo {
      h1 {
        font-size: 24px;
      }
    }

    .link-origin {
      display: none;
    }

    .link {
      display: block;
      .hamburger {
        display: block;
        cursor: pointer;
      }
    }
    .link ul {
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
    }

    .link ul.active {
      display: flex;
    }

    .link ul li {
      margin: 10px 0;
      a {
        padding: 0;
        margin: 0;
        font-size: 18px;
      }
    }
  }
}
</style>
