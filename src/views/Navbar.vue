<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container d-flex justify-content-start">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="Logo" height="40" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/articles">Estudos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projetos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style>
  .navbar {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  