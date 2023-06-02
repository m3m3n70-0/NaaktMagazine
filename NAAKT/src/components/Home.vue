<script setup>
</script>

<template>
  <div id="background-img">
    <div id="background-overlay"></div>
  </div>
</template>

<style scoped>
  #background-overlay{
    background-color: #dc0404;
    background-size: cover;
    height: 100vh;
    width: 100%;
    mix-blend-mode: overlay;
  }
  #background-img{
    background-image: url("../src/assets/img/home_page/home_image.png");
    background-size: cover;
    height: 100vh;
    width: 100%;
  }
</style>