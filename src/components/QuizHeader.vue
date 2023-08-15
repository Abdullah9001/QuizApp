<template>
  <header class="header">
    <h4 class="question-title">Question 1/3</h4>
    <div class="bar">
      <div class="completion"></div>
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
    border: 2px solid bisque;

    .completion {
      height: 100%;
      width: 0%;
      background-color: bisque;
    }
  }
}
</style>
