<template>
  <div class="about-page">
    <header class="about-header">
      <h1 class="about-title">About Us</h1>
    </header>
    <section class="about-content">
      <p class="about-description">
        Welcome to our Quiz App! We are passionate about creating a platform
        that promotes learning through interactive quizzes. Our goal is to make
        education engaging, enjoyable, and accessible to all.
      </p>
      <p class="about-mission">
        <span>Our Mission:</span> To provide a diverse range of quizzes that
        cater to different interests and subjects. We believe that learning is a
        lifelong journey, and our quizzes aim to spark curiosity and inspire
        continuous exploration.
      </p>
      <div class="about-team">
        <h2 class="team-title">Meet Our Team</h2>
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.avatar" :alt="member.name" class="member-avatar" />
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const teamMembers = ref([
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    avatar: "/dist/assets/man/bussiness-man.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Developer",
    avatar: "/dist/assets/man/young-man.png",
  },
  // Add more team members
]);
</script>

<style lang="scss" scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #068da9;
  font-weight: bold;
}

.about-content {
  margin-top: 2rem;
}

.about-description,
.about-mission {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.about-mission {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1.5rem;

  &:before {
    content: "Our Mission:";
    font-size: 2rem;
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #068da9;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
  }
}

.team-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.team-member {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  .member-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px dotted #068da9;
  }

  .member-name {
    font-size: 1.8rem;
    margin-right: 10px;
    color: #068da9;
    font-weight: bold;
  }

  .member-role {
    color: #000000;
    margin: 0;
  }
}
</style>
