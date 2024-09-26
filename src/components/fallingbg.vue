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
  // Define 13 image sources
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

  const totalObjects = 13; // We want exactly 13 objects to fall

  // Specify exact horizontal and vertical start positions (left: %, top: px)
  const birthRatePositions = [
    { left: 5, top: -50 },   // 5% from the left
    { left: 15, top: -80 },  // 15% from the left
    { left: 25, top: -60 },  // 25% from the left
    { left: 35, top: -100 }, // 35% from the left
    { left: 45, top: -50 },  // 45% from the left
    { left: 55, top: -90 },  // 55% from the left
    { left: 65, top: -70 },  // 65% from the left
    { left: 75, top: -120 }, // 75% from the left
    { left: 85, top: -60 },  // 85% from the left
    { left: 10, top: -50 },  // 95% from the left
    { left: 40, top: -110 }, // Custom position for variation
    { left: 60, top: -130 }, // Custom position for variation
    { left: 80, top: -100 }, // Custom position for variation
  ];

  // Loop to generate 13 falling objects
  for (let i = 0; i < totalObjects; i++) {
    const src = elementSources[i]; // Use each image source once

    const position = birthRatePositions[i]; // Use each specified start position

    const delay = Math.random() * 2; // Random delay (0-5s)
    const duration = 9 + Math.random() * 35; // Random duration (5-10s)
    const size = 120 + Math.random() * 200; // Random size (50-100px)

    // Push the object data to the array
    this.fallingElements.push({
      src,
      left: position.left,  // Set predefined horizontal position
      top: position.top,    // Set predefined vertical position
      delay,
      duration,
      size,
    });
  }
}

}
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
  