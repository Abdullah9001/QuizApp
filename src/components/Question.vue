<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="question-container">
    <h2 class="question">
      {{ question.text }}
    </h2>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>
          {{ option.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-container {
  margin-top: 20px;

  .question {
    font-size: 30px;
    margin-bottom: 20px;
  }
}

.options-container {
  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    .option-label {
      background-color: bisque;
      width: 40px;
      height: 40px;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .option-value {
      background-color: rgb(244, 239, 239);
      width: 100%;
      font-size: 25px;
      padding: 0 20px;
    }
  }
}
</style>
