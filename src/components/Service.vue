<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const cards = ref([
  {
    id: 1,
    img: "../assets/home/book.png",
    title: "Educational Resources:",
    text: "Access a rich collection of educational resources that accompany each quiz.",
  },
  {
    id: 2,
    img: "../assets/home/calculating.png",
    title: "Real-Time Progress Tracking:",
    text: "Keep track of your progress as you conquer quizzes.",
  },
  {
    id: 3,
    img: "../assets/home/ideas.png",
    title: "Personalized Learning:",
    text: "Tailor your learning experience by selecting quizzes based on your interests.",
  },
  {
    id: 4,
    img: "../assets/home/quiz.png",
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

    <div class="service-more">
      <div class="items">
        <img
          class="mr-right"
          src="/src/assets/10125226_17973866.jpg"
          alt="image"
        />
        <div class="items-text">
          <h1>Rich Question Database:</h1>
          <p>
            Explore a vast and diverse database of questions that span a wide
            range of topics. Whether you're interested in literature, science,
            geography, or pop culture, you'll find a quiz that piques your
            curiosity. Immerse yourself in an interactive learning experience
            that goes beyond traditional textbooks. Our quizzes engage multiple
            senses, making learning more enjoyable and memorable.
          </p>
          <RouterLink to="/quizes"
            >See More <img src="../assets/right-arrow.png" alt="arrow"
          /></RouterLink>
        </div>
      </div>
      <div class="items">
        <div class="items-text">
          <h1>Interactive Learning Experience:</h1>
          <p>
            Receive instant feedback on your answers. Whether you're right or
            wrong, our quizzes provide explanations that help you understand the
            concepts better, fostering continuous learning. Immerse yourself in
            an interactive learning experience that goes beyond traditional
            textbooks. Our quizzes engage multiple senses, making learning more
            enjoyable and memorable.
          </p>
          <RouterLink to="/quizes"
            >See More <img src="../assets/right-arrow.png" alt="arrow"
          /></RouterLink>
        </div>
        <img
          class="mr-left"
          src="../assets/10125237_17973869.jpg"
          alt="image"
        />
      </div>
      <div class="items flex-reverse">
        <img
          class="mr-right"
          src="../assets/2453852_328847-P9ZNJ6-117.jpg"
          alt="image"
        />
        <div class="items-text">
          <h1>Expand Your Knowledge Horizons:</h1>
          <p>
            From ancient civilizations to cutting-edge technologies, our quizzes
            cover a wide spectrum of knowledge, enabling you to broaden your
            horizons and discover new passions. Immerse yourself in quizzes that
            include engaging visuals, images, videos, and diagrams. Visual aids
            enhance your understanding and make learning more captivating.
          </p>
          <RouterLink to="/quizes"
            >See More <img src="../assets/right-arrow.png" alt="arrow"
          /></RouterLink>
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
    margin: 5rem auto;
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
  .service-more {
    margin: 3rem auto;
    .items {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 5rem auto;

      img {
        width: 400px;
        height: 400px;
        object-fit: cover;
      }
      .mr-left {
        margin-left: 3rem;
      }
      .mr-right {
        margin-right: 3rem;
      }

      .items-text {
        h1,
        p,
        a {
          margin: 2rem auto;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #068da9;
        }

        a {
          display: flex;
          text-align: center;
          align-items: center;
          font-size: 20px;
          text-decoration: none;
          color: black;
          img {
            width: 40px;
            height: 40px;
            margin: 0 10px;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .service-card .cards .card {
      margin: 1rem 5px;
    }

    .service-more {
      .items {
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        margin: 0rem auto;

        img {
          width: 100%;
        }
        .mr-left {
          margin-left: 0rem;
        }
        .mr-right {
          margin-right: 0rem;
        }

        .items-text {
          h1 {
            font-size: 2rem;
          }
        }
      }
      .flex-reverse {
        flex-direction: column-reverse;
      }
    }
  }
}
</style>
