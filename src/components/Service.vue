<script setup>
import { ref } from "vue";

const cards = ref([
  {
    id: 1,
    img: "/src/assets/home/book.png",
    title: "Educational Resources:",
    text: "Access a rich collection of educational resources that accompany each quiz.",
  },
  {
    id: 2,
    img: "/src//assets/home/calculating.png",
    title: "Real-Time Progress Tracking:",
    text: "Keep track of your progress as you conquer quizzes.",
  },
  {
    id: 3,
    img: "/src/assets/home/ideas.png",
    title: "Personalized Learning:",
    text: "Tailor your learning experience by selecting quizzes based on your interests.",
  },
  {
    id: 4,
    img: "/src/assets/home/quiz.png",
    title: "Community Engagement:",
    text: "Join a vibrant community of learners and quiz enthusiasts.",
  },
]);
</script>

<template>
  <div class="service">
    <div class="head-text">
      <h1>Service</h1>
    </div>
    <div class="service-card">
      <div class="cards">
        <div class="card" v-for="card in cards" :key="card.id">
          <div class="card-item">
            <img :src="card.img" alt="card img" />
            <div class="card-title">
              <h2>{{ card.title }}</h2>
              <p class="card-description">
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service {
  margin: 5rem auto;
  .head-text {
    text-align: center;
    margin: 2rem auto;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #068da9;
    }
  }

  .service-card {
    .cards {
      align-content: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 260px;
        margin: 1rem;
        border: 3px solid #068da9;
        border-radius: 5px;
        .card-item {
          text-align: center;
          align-items: center;
          justify-content: center;
          padding: 10px;
          img {
            width: 30px;
            height: 25px;
            object-fit: cover;
          }

          h2 {
            font-size: 20px;
            font-weight: bold;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
