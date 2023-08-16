<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { quizQuestionLength, numberOfCorrectAnswer } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswer",
]);
</script>

<template>
  <div class="result">
    <p>Your Result..</p>
    <h1>{{ numberOfCorrectAnswer }}/{{ quizQuestionLength }}</h1>

    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.result {
  text-align: center;
  padding: 60px 0;
  p {
    font-size: 20px;
  }
  h1 {
    font-size: 70px;
    margin: 30px 0;
  }

  a {
    padding: 10px 40px;
    background-color: antiquewhite;
    text-decoration: none;
    font-size: 18px;
    color: black;
  }
}
</style>
