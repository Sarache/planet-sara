<template>
    <div class="falling-container">
      <!-- Loop through falling elements and render each PNG as a falling object -->
      <div
        v-for="(element, index) in fallingElements"
        :key="index"
        class="falling-object"
        :style="{
          backgroundImage: `url(${element.src})`,
          left: `${element.left}%`,
          animationDelay: `${element.delay}s`,
          animationDuration: `${element.duration}s`,
          width: `${element.size}px`,
          height: `${element.size}px`
        }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fallingElements: [],
      };
    },
    mounted() {
      this.generateFallingObjects();
    },
    methods: {
      // Generates random falling objects with random properties (left position, delay, size)
      generateFallingObjects() {
  const elementSources = [
    './img/doodles/Artboard1.png',
    './img/doodles/Artboard2.png',
    './img/doodles/Artboard3.png',
    './img/doodles/Artboard4.png',
    './img/doodles/Artboard5.png',
    './img/doodles/Artboard6.png',
    './img/doodles/Artboard7.png',
    './img/doodles/Artboard8.png',
    './img/doodles/Artboard9.png',
    './img/doodles/Artboard10.png',
    './img/doodles/Artboard11.png',
    './img/doodles/Artboard12.png',
    './img/doodles/Artboard13.png',
  ];

  const numObjects = 1; // Total number of objects to fall


 for (let i = 0; i < numObjects; i++) {
    elementSources.forEach((src) => {
      const left = Math.random() * 100; // Random horizontal position (0-100%)
      const delay = Math.random() * 7; // Random delay (0-5s) to start falling
      const duration = 5 + Math.random() * 30; // Random duration (5-10s) for the fall
      const size = 150 + Math.random() * 200; // Random size (50px to 100px)

      // Push each generated object with random properties into the fallingElements array
      this.fallingElements.push({ src, left, delay, duration, size });
    });
  }
}
,
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Container for the falling elements */
  .falling-container {
    mix-blend-mode: overlay;
    opacity: 20%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none; /* Prevents interference with user interactions */
    overflow: hidden; /* Ensures objects are hidden when they exit the screen */
    z-index: -1; /* Places it behind other content */
  }
  
  /* Styles for each falling object */
  .falling-object {

    position: absolute;
    top: -300px; /* Start slightly above the screen */
    background-size: contain;
    background-repeat: no-repeat;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite; /* Keep falling in a loop */
  }
  
  /* Keyframes for the falling animation */
  @keyframes fall {
    0% {
      transform: translateY(0); /* Start at the top */
    }
    100% {
      transform: translateY(140vh); /* End at the bottom of the viewport */
    }
  }
  </style>
  