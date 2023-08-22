import { createRouter, createWebHistory } from "vue-router";
import QuizesVue from "../views/QuizesView.vue";
import QuizVue from "../views/QuizView.vue";
import IndexVue from "../views/Index.vue";
import AboutVue from "../views/about.vue";
import ContactVue from "../views/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutVue,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactVue,
    },
    {
      path: "/quizes",
      name: "quizes",
      component: QuizesVue,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizVue,
    },
  ],
});

export default router;
