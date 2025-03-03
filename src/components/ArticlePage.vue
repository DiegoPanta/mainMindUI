<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const article = ref(null);

const fetchArticle = async () => {
  const articles = [
    { id: 1, title: "Princípios SOLID", content: `
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>S - Single Responsibility Principle (SRP)</strong><br>
              Uma classe deve ter apenas uma única responsabilidade.</li>
            <li class="list-group-item"><strong>O - Open/Closed Principle (OCP)</strong><br>
              O código deve estar aberto para extensão, mas fechado para modificação.</li>
            <li class="list-group-item"><strong>L - Liskov Substitution Principle (LSP)</strong><br>
              Objetos de uma classe derivada devem substituir objetos da classe base sem efeitos colaterais.</li>
            <li class="list-group-item"><strong>I - Interface Segregation Principle (ISP)</strong><br>
              Interfaces devem ser específicas e não forçar a implementação de métodos desnecessários.</li>
            <li class="list-group-item"><strong>D - Dependency Inversion Principle (DIP)</strong><br>
              Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações.</li>
          </ul>
    ` },
    { id: 2, title: "Clean Code", content: `
        <p><strong>Clean Code</strong> (Código Limpo) é um conceito essencial na programação que se refere à escrita de código de forma legível, organizada e fácil de manter. O termo foi popularizado por Robert C. Martin (Uncle Bob) em seu livro <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>.</p>
      
        <h3>Princípios do Clean Code:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>1. Legibilidade:</strong> O código deve ser fácil de ler e entender.</li>
          <li class="list-group-item"><strong>2. Simplicidade:</strong> Evite complexidade desnecessária. Código simples é mais fácil de manter.</li>
          <li class="list-group-item"><strong>3. Nomes Significativos:</strong> Variáveis, funções e classes devem ter nomes claros e descritivos.</li>
          <li class="list-group-item"><strong>4. Pequenas Funções:</strong> Cada função deve fazer apenas uma coisa e fazer bem.</li>
          <li class="list-group-item"><strong>5. Comentários Necessários:</strong> Comentários devem explicar o "porquê", não o "como".</li>
          <li class="list-group-item"><strong>6. Uso Consistente de Formatação:</strong> Mantenha um padrão de formatação consistente no código.</li>
          <li class="list-group-item"><strong>7. Testes Automatizados:</strong> Código limpo é testável e possui uma cobertura de testes adequada.</li>
        </ul>
        <p>Escrever código limpo melhora a produtividade da equipe, reduz bugs e facilita a manutenção do software a longo prazo.</p>
    `},
    { id: 3, title: "Orientação a Objetos", content: `
        <p><strong>Orientação a Objetos (OO)</strong> é um paradigma de programação baseado no conceito de objetos, que representam entidades do mundo real e possuem atributos (dados) e métodos (comportamentos).</p>
        
        <h3>Principais Conceitos da Orientação a Objetos:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>1. Classes:</strong> São moldes para criar objetos. Definem atributos e métodos.</li>
          <li class="list-group-item"><strong>2. Objetos:</strong> São instâncias de uma classe e representam entidades no sistema.</li>
          <li class="list-group-item"><strong>3. Encapsulamento:</strong> Protege os dados internos de um objeto, permitindo o acesso apenas por meio de métodos específicos.</li>
          <li class="list-group-item"><strong>4. Herança:</strong> Permite que uma classe derive características de outra, reutilizando código e promovendo a hierarquia entre classes.</li>
          <li class="list-group-item"><strong>5. Polimorfismo:</strong> Permite que um mesmo método tenha diferentes comportamentos, dependendo da classe que o implementa.</li>
          <li class="list-group-item"><strong>6. Abstração:</strong> Oculta os detalhes internos e expõe apenas o necessário para o uso do objeto.</li>
        </ul>

        <p>A programação orientada a objetos facilita a organização do código, promove a reutilização e melhora a manutenção do software.</p>
    ` },
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
        <div v-html="article.content"></div>
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
