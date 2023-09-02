<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <div class="hero">
      <div class="text">
        <h2>Hello There,</h2>
        <h1>
          Introducing the Ultimate Book <span> Quiz App –</span> Your Gateway to
          Knowledge!
        </h1>
        <p>
          Embark on an exhilarating journey of intellect and discovery with our
          immersive quiz app. Immerse yourself in the captivating world of
          books, where every page turned leads to new realms of understanding.
          Whether you're a seasoned bibliophile or just beginning to explore the
          power of literature, our app offers a diverse range of quizzes that
          will challenge, enlighten, and entertain.
        </p>
        <RouterLink to="/quizes">Get Start</RouterLink>
      </div>
      <div class="image">
        <img src="../assets/quiz.svg" alt="quiz image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10rem;
  margin: 4rem auto;

  .text {
    width: 700px;

    h2,
    h1,
    p {
      margin: 0.5rem 0;
    }
    h2,
    h1 {
      font-weight: bold;
    }

    h2 {
      font-size: 25px;
    }
    h1 {
      font-size: 2.9rem;
      line-height: 120%;
      span {
        color: #068da9;
        font-weight: bold;
      }
    }
    p {
      font-size: 16px;
      line-height: 130%;
      margin-bottom: 40px;
    }

    a {
      text-decoration: none;
      padding: 10px 80px;
      background-color: #068da9;
      border-radius: 5px;
      color: white;
    }
  }

  .image {
    height: 500px;
    width: 300px;
    img {
      height: 100%;
    }
  }

  // Media Query for Mobile
  @media (max-width: 1024px) {
    padding: 3rem;
  }
  @media (max-width: 1024px) {
    padding: 3rem;
    .text {
      width: 100%;

      h1 {
        font-size: 2.2rem;
      }

      p {
        font-size: 14px;
        margin-bottom: 20px;
      }

      a {
        padding: 10px 40px;
      }
    }

    .image {
      height: 500px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;

    .text {
      width: 100%;

      h1 {
        font-size: 2.2rem;
      }

      p {
        font-size: 14px;
        margin-bottom: 20px;
      }

      a {
        padding: 10px 40px;
      }
    }

    .image {
      height: 500px;
      width: 100%;
    }
  }
}
</style>
