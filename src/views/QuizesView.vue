<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";

import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <header>
      <h1>Quiz</h1>
      <input v-model.trim="search" type="text" placeholder="Search" />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 20px;
  // background-color: #f1f2f6;

  header {
    display: flex;
    align-items: center;
    margin: 15px 0;
    h1 {
      font-weight: bold;
      margin-right: 10px;
      color: #068da9;
      font-size: 3rem;
    }
    input {
      outline: none;
      height: 30px;
      padding: 5px;
    }
  }
  .options-container {
    display: flex;
    grid-template-columns: auto auto auto;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
</style>
