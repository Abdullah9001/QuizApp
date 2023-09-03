<script setup>
import UserExperienceCard from "../components/UserExperienceCard.vue";

const users = [
  {
    id: 1,
    name: "Alice",
    image: "/dist/assets/man/beard.png",
    experience:
      "I've been learning so much through the quizzes on this platform. It's an engaging and enjoyable way to expand my knowledge.",
  },
  {
    id: 2,
    name: "Bob",
    image: "/dist/assets/man/bussiness-man.png",
    experience:
      "The quizzes have helped me boost my confidence in subjects that I used to struggle with. The explanations are really helpful!",
  },
  {
    id: 3,
    name: "Eve",
    image: "/dist/assets/man/young-man.png",
    experience:
      "Being part of the community and competing on leaderboards has added a fun and social aspect to my learning journey.",
  },
];
</script>

<template>
  <div class="Experience">
    <div class="head-text">
      <h1>User Experience</h1>
    </div>
    <UserExperienceCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style lang="scss" scoped>
.Experience {
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
}
</style>
