<template>
  <div class="container mt-5">
    <div class="card shadow-lg border-0">
      <div class="card-header bg-gradient-primary text-white text-center">
        <h2>Sobre Mim</h2>
      </div>
      <div class="card-body">
        <p class="text-muted">
          Bem-vindo ao meu blog! Aqui, compartilho conhecimentos sobre desenvolvimento de software, arquitetura de sistemas, computação em nuvem e boas práticas de programação.
        </p>
        <p class="text-muted">
          Sou um profissional com mais de 10 anos de experiência, especializado em C#, JavaScript, SQL Server e soluções AWS. Tenho paixão por aprender e ensinar, e este blog é um espaço para trocar ideias, discutir desafios e compartilhar soluções.
        </p>
        <p class="text-muted">
          Se deseja saber mais ou colaborar, sinta-se à vontade para entrar em contato. Vamos construir juntos um ambiente de aprendizado contínuo!
        </p>

        <!-- Habilidades -->
        <h4 class="mt-4 text-primary"><i class="fas fa-code"></i> Habilidades</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Linguagens:</strong> C#, JavaScript, SQL</li>
          <li class="list-group-item"><strong>Front-end:</strong> Vue.js, HTML, CSS, Bootstrap</li>
          <li class="list-group-item"><strong>Back-end:</strong> API RESTful</li>
          <li class="list-group-item"><strong>Banco de Dados:</strong> SQL Server, DynamoDB</li>
          <li class="list-group-item"><strong>Cloud & DevOps:</strong> AWS, Terraform</li>
          <li class="list-group-item"><strong>Segurança:</strong> JWT, Boas Práticas de Segurança em APIs</li>
        </ul>

        <!-- Contatos -->
        <h4 class="mt-4 text-primary"><i class="fas fa-address-book"></i> Contatos</h4>
        <div class="d-flex gap-3">
          <a href="https://www.linkedin.com/in/diego-panta-cardoso-a04480122" target="_blank" class="btn btn-outline-primary">
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </a>
          <a href="https://github.com/DiegoPanta" target="_blank" class="btn btn-outline-dark">
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  margin: auto;
}

.card-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

  
  <script setup>
  </script>
  