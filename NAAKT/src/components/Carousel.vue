<template>
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel">
          <div class="carousel-slide" ref="slide">
            <a v-for="(image, index) in carouselImages" :href="image.link" :key="index">
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
        carouselImages: [
          {
            src: "../src/assets/img/carousel/logo.png",
            alt: "Logo",
            link: "https://example.com/logo"
          },
          {
            src: "../src/assets/img/carousel/logo1.jpeg",
            alt: "Logo 1",
            link: "https://example.com/logo1"
          },
          {
            src: "../src/assets/img/carousel/logo2.jpeg",
            alt: "Logo 2",
            link: "https://example.com/logo1"
          },
          {
            src: "../src/assets/img/carousel/logo3.png",
            alt: "Logo 3",
            link: "https://example.com/logo1"
          },
          {
            src: "../src/assets/img/carousel/logo4.png",
            alt: "Logo 1",
            link: "https://example.com/logo1"
          },
          {
            src: "../src/assets/img/carousel/logo5.png",
            alt: "Logo 1",
            link: "https://example.com/logo1"
          }

        ]
      };
    },
    mounted() {
      const copyCarousel = this.$refs.slide.cloneNode(true);
      const carousel = this.$el.querySelector('.carousel');
      carousel.appendChild(copyCarousel);
    }
  };
  </script>
  
  <style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-wrapper {
  width: 50%;
}

.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 50px 0;
  white-space: nowrap;
}

.carousel-slide {
  animation: 35s slide infinite linear;
  display: inline-block;
}

.carousel:hover .carousel-slide {
  animation-play-state: paused;
}
.carousel-slide a {
  display: inline-block;
  margin: 0 30px;
}
.carousel-slide img {
  height: 50px;
}
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>