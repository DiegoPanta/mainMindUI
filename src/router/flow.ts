import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Articles from '../components/Articles.vue';
import ArticlePage from '../components/ArticlePage.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: ArticlePage, props: true },
  { path: '/projects', component: Projects },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
