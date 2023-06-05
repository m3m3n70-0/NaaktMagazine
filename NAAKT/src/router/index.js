import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
  ]
});

// store function to check for login status
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/login', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.login;
  if (loggedIn) {
    console.log('Logged in');
  } else if (authRequired && loggedIn == false) {
    console.log('Niet ingelogd');
    return next('/login');
  }
  next();
})

export default router
