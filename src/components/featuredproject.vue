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
  

  @media (max-width: 768px) {
  .featuredcontent {

    flex-direction: column; // Stack on smaller screens

    .featuredpicture {
      height: 50vh;
    }

    .featuredtext {
      width: 100%; // Full width on smaller screens
      padding-left: 0; // Remove padding for mobile
    }
  }
}


  h1 {
    padding-bottom: 2rem;
    letter-spacing: -3.5pt;
  }
  
  .featuredcontent {
    display: flex;
    flex-direction: row;
    width: 100%; 
   
    @media (max-width: 1000px) {
      flex-direction: column;
			}
    
  
    .featuredpicture {
      width: 100%;
      background-size:contain;
      background-position: cover;
      background-repeat: no-repeat;    }

  
    .featuredtext {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      width: 40%;
justify-content: space-between;

@media (max-width: 1000px) {
        width: 100%;
			}

    }
  }
  </style>
  