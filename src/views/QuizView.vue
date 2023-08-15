<template>
  <div>
    <header class="header">
      <h4 class="question-title">Question 1/3</h4>
      <div class="bar">
        <div class="completion"></div>
      </div>
    </header>
    <div>
      <div class="question-container">
        <h2 class="question">What is the chemical value of table salt ?</h2>
      </div>
      <div class="options-container">
        <div class="option">
          <p class="option-label">A</p>
          <div class="option-value">
            <p>NaCL</p>
          </div>
        </div>
        <div class="option">
          <p class="option-label">A</p>
          <div class="option-value">
            <p>NaCL</p>
          </div>
        </div>
        <div class="option">
          <p class="option-label">A</p>
          <div class="option-value">
            <p>NaCL</p>
          </div>
        </div>
        <div class="option">
          <p class="option-label">A</p>
          <div class="option-value">
            <p>NaCL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
