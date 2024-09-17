<template>
    <subtitle>Featured case studies</subtitle>
    <h1><slot name="title">Project title example</slot></h1>
    <div class="featuredcontent">
      <div class="featuredpicture" :style="{ backgroundImage: `url(${background})` }">
      </div>
      <div class="featuredtext" :style="{ color: `${color}`}">
        <div class="featsection">
          <h4>The client</h4>
          <p><slot name="clientc">example</slot></p>
        </div>
        <div class="featsection">
          <h4>The challenge</h4>
          <p><slot name="challengec"></slot></p>
        </div>
        <div class="featsection">
          <h4>The solution</h4>
          <p><slot name="solutionc"></slot></p>
        </div>
      
    <div class="button">
        <img class="icon" src=""><slot name ="button"></slot></div>
    </div></div>
  </template>
  
  <script>
  import carouselhome from '/src/components/carouselhome.vue';
  
  export default {
    components: {
      carouselhome,
    },
    props: {
      background: {
        type: String,
        default: '/public/img/Axel_3D.png', // Default background
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "../assets/scss/_variables.scss";
  
  h1 {
    padding-bottom: 2rem;
    letter-spacing: -3.5pt;
  }
  
  .featuredcontent {
    display: flex;
    flex-direction: row;
    width: 100%; 
    
  
    .featuredpicture {
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;    }
  
    .featuredtext {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      width: 50%;
      padding-left: 2rem;
justify-content: space-between;
    }
  }
  </style>
  