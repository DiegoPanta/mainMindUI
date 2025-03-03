<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Estudos</h1>
      <p class="text-center">Explore conteúdos sobre tecnologia, desenvolvimento de software e tutoriais práticos para aprimorar suas habilidades.</p>
      
      <div class="row">
        <div class="col-md-4" v-for="article in articles" :key="article.id">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.excerpt }}</p>
              <router-link :to="'/articles/' + article.id" class="btn btn-primary">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const articles = ref([
    { 
      id: 1, 
      title: 'Princípios SOLID', 
      excerpt: 'Descubra como aplicar os princípios SOLID para escrever código mais limpo, modular e sustentável.' 
    },
    { 
      id: 2, 
      title: 'Clean Code', 
      excerpt: 'Aprenda as melhores práticas para escrever um código claro, legível e de fácil manutenção.' 
    },
    { 
      id: 3, 
      title: 'Orientação a Objetos', 
      excerpt: 'Entenda os principais conceitos da Programação Orientada a Objetos e como aplicá-los de forma eficaz.' 
    }
  ]);
  </script>
  
  <style>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.03);
  }
  </style>
  