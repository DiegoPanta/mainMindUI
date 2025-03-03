<template>
  <div id="app" class="container-fluid">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding-top: 60px;
}
</style>
