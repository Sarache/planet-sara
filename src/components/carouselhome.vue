<template>
  <div class="container">
    <div class="carousel" :style="carouselStyle">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['item', item.class, { active: isActive(index) }]"
        :style="{ backgroundImage: item.background }"
      ></div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      currdeg: 0,
      items: [
        { class: 'a', background: 'url("./img/Sarache_About_1.png")' },
        { class: 'b', background: 'url("././img/Sarache_About_2.png")' },
        { class: 'c', background: 'url(".//img/Sarache_About_3.png")' },
        { class: 'd', background: 'url("././/img/Sarache_Design_1.png")' },
      ]
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `rotateY(${this.currdeg}deg)`
      };
    }
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.rotateCarousel();
      }, 10000); // 10 seconds per slide
    },
    rotateCarousel() {
      this.currdeg -= 90; // Rotate by 90 degrees
    },
    isActive(index) {
      // Total items
      const totalItems = this.items.length;
      // Calculate which item is currently active
      const currentIndex = Math.abs(Math.round(this.currdeg / 90)) % totalItems;
      return currentIndex === index;
    }
  }
};
</script>

  
<style scoped>
  .container {
    position: absolute;
top: 50%;
    right: 2rem;
    width: 60%;
    height: 60%;
    perspective: 400px;
    z-index: 0;

  }
  .carousel {
    height: 60%;
    width: 60%;
    transform-style: preserve-3d;
    transition: transform 1s;
    position: absolute;


  }
  .item {
  display: block;
position: absolute;
  background-size: cover;
  width:100%;
  height: 100%;
  opacity: 0.2; /* Default lower opacity */
  transition: opacity 0.5s ease;
}

.item.active {
  opacity: 1; /* Full opacity for the main image */
}
  .a {
    transform: rotateY(0deg) translateZ(250px);
    background: url("./img/Sarache_About_1.png");
     background-size: cover; /* Ensure the image covers the entire element */
  background-position: center; /* Center the image */

  }
  .b {
    transform: rotateY(90deg) translateZ(250px);
    background: url("../img/Sarache_About_2.png");
    background-size: cover; /* Ensure the image covers the entire element */
    background-position: center; /* Center the image */
  }
  .c {
    transform: rotateY(180deg) translateZ(250px);
    background: url("././img/Sarache_About_3.png");
    background-size: cover; /* Ensure the image covers the entire element */
    background-position: center; /* Center the image */
  }
  .d {
    transform: rotateY(270deg) translateZ(250px);
    background: url("//img/Sarache_Design_1.png");
    background-size: cover; /* Ensure the image covers the entire element */
    background-position: center; /* Center the image */
  }
  /* .e {
    transform: rotateY(240deg) translateZ(250px);
    background: url("pic5.jpg");
  }
  .f {
    transform: rotateY(300deg) translateZ(250px);
    background: url("pic6.jpg");
  } */
</style>
  