<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CustomAlert from "../components/CustomAlert.vue";

const router = useRouter();

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const showAlert = ref(false);

const submitForm = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
    location.reload();
  }, 3000);
};
</script>

<template>
  <div class="experience-page">
    <header class="experience-header">
      <h1 class="experience-title">Send us a message</h1>
    </header>
    <section class="experience-content">
      <form class="experience-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Email....."
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Message....."
          ></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>
    <CustomAlert v-if="showAlert" />
  </div>
</template>

<style lang="scss" scoped>
.experience-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  margin: 2rem auto;
}

.experience-header {
  text-align: center;
  align-items: center;
}

.experience-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #068da9;
}

.experience-content {
  margin-top: 2rem;
}

.experience-form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #068da9;
  border-radius: 4px;
}
textarea {
  height: 8rem;
  padding: 0.5rem;
  border: 1px solid #068da9;
  border-radius: 4px;
}

.submit-button {
  background-color: #068da9;
  color: #fff;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

@media (max-width: 640px) {
  .experience-title {
    font-size: 2.5rem;
  }
}
</style>
