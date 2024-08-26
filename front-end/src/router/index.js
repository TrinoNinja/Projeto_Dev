import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/vw_login.vue';
import Home from '../views/vw_home.vue';
import Users from '../views/vw_users.vue';
import EditUser from '../views/vw_edit_user.vue';
import Contato from '../views/vw_contato.vue';
import Sobre from '../views/vw_about.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Usuarios',
    component: Users,
  },
  {
    path: '/edit_user/:id',
    name: 'EditarUsuarios',
    component: EditUser,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
