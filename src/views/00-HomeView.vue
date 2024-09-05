<script setup>
import hero from "@/components/hero.vue";
import featuredproject from "@/components/featuredproject.vue";
import resume from "@/components/resume.vue";
import InfiniteSlider from "@/components/InfiniteSlider.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome abroad!",
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update the body background color
        document.body.style.backgroundColor = getComputedStyle(entry.target).backgroundColor;
      }
    });
  }, {
    threshold: 0.5 // Adjust based on how much of the section needs to be visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

</script>

<template>
  <main>
    <div class="scroll-container">
    <section class="hero" style="background-color: #8c2138;;">    <hero /></section>
    <section class="featuredproject" style="background-color: #ffc107;">    <featuredproject/></section>
    <section class="featuredproject" style="background-color: #3a08b3;;"><featuredproject/></section>
    <!-- Add more sections as needed -->
  </div>

    <br />

  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/grid.scss";


main {
  display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    padding: 4rem; /* Optional: adjust padding as needed */
  @media (max-width: 1000px) {
    flex-direction: column;
  }


  .scroll-container {
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Prevent scrollbars */
}

.scroll-section {
  height: 100vh; /* Full viewport height for each section */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease; /* Smooth transition for background color */
}
}
</style>
