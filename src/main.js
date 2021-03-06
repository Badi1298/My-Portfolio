import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import AboutMe from './components/AboutMe.vue';
import ResumeInfo from './components/ResumeInfo.vue';
import ProjectsInfo from './components/ProjectsInfo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/aboutme' },
    { path: '/aboutme', component: AboutMe },
    { path: '/resume', component: ResumeInfo },
    { path: '/projects', component: ProjectsInfo },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
