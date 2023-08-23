<template>
  <div class="custom-alert">
    <div class="alert-content">
      <h2>Welcome to Our App!</h2>
      <p>
        We're glad to have you here. Get ready to explore and learn with our
        interactive quizzes.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.custom-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #068da9;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
