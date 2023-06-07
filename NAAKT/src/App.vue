<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav v-if="!isLoginPage">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
<script>
export default {
  computed: {
    isLoginPage() {
      return this.$route.path === '/login' || this.$route.path === '/dashboard';
    }
  }
};
</script>
<style scoped>
    @import './assets/main.css';
    nav{
      position: fixed;
      display: flex;
      width: 100%;
      backdrop-filter: brightness(60%) blur(1px);
      flex-direction: row;
      justify-content: flex-end;
      z-index: 10;
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
    a{
      font-family: elza;
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      text-decoration: none;
      color: var(--white);
      margin-right: 3%;
    }
    #last-nav-item{
      margin-right: 10%;
    }
</style>
