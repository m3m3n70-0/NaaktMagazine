<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
    @import '../assets/main.css';
    nav{
      position: absolute;
      display: flex;
      flex-direction: row;
      z-index: 5;
    }
    a{
      text-decoration: none;
      color: var(white);
    }
</style>
