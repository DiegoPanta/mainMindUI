<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Projetos</h1>
      <p class="text-center">Explore nossos projetos de estudo, faça o download e execute em sua máquina para aprender na prática.</p>
      
      <div class="row">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="btn btn-primary">View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projects = ref([
    { 
      id: 1, 
      name: 'BetaApi', 
      description: 'Uma API desenvolvida com Terraform e tecnologias AWS para infraestrutura escalável e automatizada.', 
      link: 'https://github.com/DiegoPanta/BetaApi' 
    },
    { 
      id: 2, 
      name: 'SecurityApplication', 
      description: 'Projeto voltado para segurança de aplicações, implementando autenticação passwordless para maior proteção e usabilidade.', 
      link: 'https://github.com/DiegoPanta/SecurityApplication' 
    },
    { 
      id: 3, 
      name: 'RabbitMQ Exemplo', 
      description: 'Projeto console demonstrando, de forma prática, a implementação de um produtor e consumidor de mensagens no RabbitMQ.', 
      link: 'https://github.com/DiegoPanta/ExampleRabbitMQProducer' 
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
  