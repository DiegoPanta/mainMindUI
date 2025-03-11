<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import SolidPrinciples from "../components/article-list/SolidPrinciples.vue";
import CleanCode from "../components/article-list/CleanCode.vue";
import POO from "../components/article-list/POO.vue";

const route = useRoute();
const article = ref(null);

const fetchArticle = async () => {
  const articles = [
    { id: 1, title: "Princípios SOLID", content: SolidPrinciples },
    { id: 2, title: "Clean Code", content: CleanCode },
    { id: 3, title: "Orientação a Objetos", content: POO },
    ];

  // Garantindo que route.params.id seja um número
  article.value = articles.find(a => a.id === Number(route.params.id));
};

onMounted(fetchArticle);
</script>

<template>
  <div class="container mt-5">
    <div v-if="article" class="card shadow-lg border-0">
      <div class="card-header bg-gradient-primary text-white text-center">
        <h2>{{ article.title }}</h2>
      </div>
      <div class="card-body">
        <component :is="article.content"></component>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Carregando artigo...</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  margin: auto;
}
.card {
  border-radius: 10px;
}
.card-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
