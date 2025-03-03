<template>
    <div class="container mt-5">
      <div class="jumbotron text-center bg-primary text-white p-5 rounded">
        <h1>Bem-vindo ao meu Blog</h1>
        <p>Um espaço dedicado à documentação dos meus estudos, projetos e aprendizados em tecnologia.</p>
      </div>
      
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Estudos</h5>
              <p class="card-text">Mantenha-se atualizado com o mais recente estudo sobre tecnologia e boas práticas do setor.</p>
              <router-link to="/articles" class="btn btn-primary">Explore todos os estudos</router-link>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Projetos</h5>
              <p class="card-text">Acesse todos os projetos publicados.</p>
              <router-link to="/projects" class="btn btn-primary">Visualizar Projetos</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style>
  .jumbotron {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  