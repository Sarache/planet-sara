<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import hero from "@/components/hero.vue";
import featuredproject from "@/components/featuredproject.vue";
import { useHead } from "@unhead/vue";
import Resume from '../components/resume.vue';

// SEO Setup
useHead({
  title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome aboard!",
});


document.addEventListener('wheel', (event) => {
   // Check if this code is triggering correctly when scrolling
   console.log("Wheel event:", event);
});

// Refs for sections
const sectionsRef = ref([]);
let currentSection = 0;

// Function to smoothly scroll to a specific section
const scrollToSection = (index) => {
  const section = sectionsRef.value[index];
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // Ensures smooth scrolling
    });
  }
};


// Handle wheel event to scroll between sections
const handleWheel = (event) => {
  event.preventDefault();
  
  if (event.deltaY > 0 && currentSection < sectionsRef.value.length - 1) {
    currentSection++;
  } else if (event.deltaY < 0 && currentSection > 0) {
    currentSection--;
  }
  scrollToSection(currentSection);
};

// Set up the IntersectionObserver on mount
onMounted(() => {
  const sections = sectionsRef.value;

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the body background color based on the section
          document.body.style.backgroundColor = getComputedStyle(entry.target).backgroundColor;
        }
      });
    },
    {
      threshold: 0.6, // 60% of the section must be visible
    }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Listen for the wheel event to handle smooth scroll between sections
  window.addEventListener('wheel', handleWheel, { passive: false });

  // Cleanup observer before unmount
  onBeforeUnmount(() => {
    observer.disconnect();
    window.removeEventListener('wheel', handleWheel);
  });
});
</script>



<template>
  <main>
    <div class="scroll-container">
      <section ref="el => sectionsRef.value[0] = el" class="scroll-section hero" style="background-color: #8c2138;">        <hero />
      </section>
      <section ref="el => sectionsRef.value[1] = el" class="scroll-section featuredproject" style="background-color: #3a08b3; color: #d37462;">
      

        <featuredproject background="./img/Axel_Stage.png">

          <featuredtext color="#7d81e"></featuredtext>
        <template v-slot:clientc>The client is a national insurance company with different products such as Bank insurance, House Insurance and a service portfolio.</template>
        <template v-slot:challengec>We have identified that the clients of the insurance are not really aware of their contract terms and specific conditions. Moreover, in situations of distress, they get really frustrated getting in touch with a human assistant to respond quickly to their queries and giving personalized assistance.</template>
        <template v-slot:solutionc>We have Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a clear and concise output to the user thanks to Generative AI. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.</template>
      </featuredproject>
      </section>

      <section ref="el => sectionsRef.value[2] = el" class="scroll-section featuredproject" style="background-color: #c15544; color: #54222b;">

      <featuredproject background="./img/ePOD_Desktop_v1.png">
        <template v-slot:title>ePOD</template>
        <template v-slot:clientc>Jean-Louis Etienne, a well-known french doctor and explorer, started a project involving a vertical boat and an expedition in the South Pole taking place in 2024. The team wanted a website that could provide open-source data that can be understood by students and non-scientists.</template>
        <template v-slot:challengec>An interactive Digital Twin able to explain the expedition to the big audience through a 3D model and story paths and broadcast live data retrieved by the scientists in the real boat.</template>
        <template v-slot:solutionc>The challenge was to include a sustainable solution along with a digital twin and reach the big audience, designing with strong accessibility and usability standards. As well, they wanted the desktop version first, which slowed down the mobile design phase.</template>
      </featuredproject>
      </section>
      <section ref="el => sectionsRef.value[3] = el" class="scroll-section resume" style="background-color: #f6ca6f;">
        <Resume></Resume>
</section>

    </div>
    <br />
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/grid.scss";


main {

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .scroll-container {
  scroll-snap-type: y mandatory; /* Enables scroll snapping */
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;


  .scroll-section {
  scroll-snap-align: start; /* Snap each section to the top */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 1s ease; /* Smooth transition for background color */
  padding: 4rem 0 0;

  &.featuredproject {

    padding: 4rem;
  }
}
}

}
</style>
