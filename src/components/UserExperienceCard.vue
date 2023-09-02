<template>
  <div class="user-card">
    <div class="user-image">
      <img :src="user.image" :alt="user.name" />
    </div>
    <div class="user-info">
      <h3 class="user-name">{{ user.name }}</h3>
      <p class="user-description">{{ user.experience }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { user } = defineProps(["user"]);
</script>

<style lang="scss" scoped>
.user-card {
  border: 1px solid #068da9;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 3rem auto;

  .user-image {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .user-info {
    flex: 1;

    .user-name {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #068da9;
      font-weight: bold;
      font-size: 1.7rem;
    }
    .user-description {
      font-size: 1rem;
      color: #555;
    }
  }
  @media (max-width: 1000px) {
    padding: 10px;
    margin: 3rem;
  }
  @media (max-width: 640px) {
    padding: 10px;
    margin: 2rem;
    gap: 10px;
    flex-direction: column;
    text-align: center;

    .user-image {
      img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }
    }

    .user-info {
      text-align: center;

      .user-name {
        font-size: 1.3rem;
      }

      .user-description {
        font-size: 1rem;
      }
    }
  }
}
</style>
