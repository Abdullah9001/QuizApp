<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);
const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToQuiz">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  margin: 10px;
  box-shadow: 1px 1px 10px #1b1b1b;
  cursor: pointer;
  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
  }
  .card-text {
    padding: 0 5px;
    h2 {
      font-weight: bold;
      color: #068da9;
    }
    p {
      color: #1b1b1b;
    }
  }
}
</style>
