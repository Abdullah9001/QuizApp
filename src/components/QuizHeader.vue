<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<template>
  <header class="header">
    <h4 class="question-title">Question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 20px;
  .question-title {
    font-size: 20px;
  }
  .bar {
    width: 300px;
    height: 40px;
    border: 2px solid #068da9;

    .completion {
      height: 100%;
      width: 0%;
      background-color: #068da9;
    }
  }
}
</style>
