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
    router.push("/");
  }, 3000);
};
</script>

<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1 class="contact-title">Contact Us</h1>
    </header>
    <section class="contact-content">
      <p class="contact-description">
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Use the form below to get in touch with us.
      </p>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>
    <CustomAlert v-if="showAlert" />
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #068da9;
}

.contact-content {
  margin-top: 2rem;
}

.contact-description {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.contact-form {
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

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
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
</style>
