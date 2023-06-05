<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about" id="last-nav-item">About</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
    @import './assets/main.css';
    nav{
      position: absolute;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;
      z-index: 5;
    }
    a{
      font-family: elza;
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      text-decoration: none;
      color: var(--white);
      padding-top: 3rem;
      margin-right: 3%;
    }
    #last-nav-item{
      margin-right: 10%;
    }
</style>
