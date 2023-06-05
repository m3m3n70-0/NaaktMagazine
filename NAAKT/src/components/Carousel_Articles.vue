<template>
    <div class="carouselA-container">
      <div class="carouselA-wrapper">
        <div class="carouselA">
          <div class="carouselA-slide" ref="slide">
            <a v-for="(image, index) in carouselAImages" :href="image.link" :key="index">
              <img :src="image.src" :alt="image.alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carouselAImages: [
          {
            src: "../src/assets/img/home_page/Article-1.png",
            alt: "Article 1",
          },
          {
            src: "../src/assets/img/home_page/Article-2.png",
            alt: "Article 2",
          },
          {
            src: "../src/assets/img/home_page/Article-3.png",
            alt: "Article 3",
          },
          {
            src: "../src/assets/img/home_page/Article-4.png",
            alt: "Article 4",
          },
          {
            src: "../src/assets/img/home_page/Article-5.png",
            alt: "Article 5",
          },
          {
            src: "../src/assets/img/home_page/Article-6.png",
            alt: "Article 6",
          }
        ]
      };
    },
    mounted() {
      const copyCarouselA = this.$refs.slide.cloneNode(true);
      const carouselA = this.$el.querySelector('.carouselA');
      carouselA.appendChild(copyCarouselA);
    }
  };
  </script>
  
  <style scoped>

</style>