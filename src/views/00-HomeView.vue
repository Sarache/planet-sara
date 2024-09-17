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
      threshold: 0.5, // 50% of the section must be visible
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




<!-- <script>
export default {
	data() {
		return {
			curX: 0,
			curY: 0,
			tgX: 0,
			tgY: 0,
		}
	},
	mounted() {
		this.interBubble = this.$refs.interBubble

		// Initial setup
		this.move()
		this.setupEventListeners()
	},
	methods: {
		move() {
			this.curX += (this.tgX - this.curX) / 20
			this.curY += (this.tgY - this.curY) / 20
			this.interBubble.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`
			requestAnimationFrame(() => {
				this.move()
			})
		},
		setupEventListeners() {
			window.addEventListener("mousemove", (event) => {
				this.tgX = event.clientX
				this.tgY = event.clientY
			})
		},
		handleMouseMove(event) {
			// Access the elements using refs
			const container = this.$refs.scrollContainer
			const content = this.$refs.section

			// Get mouse position relative to the center of the container
			const rect = container.getBoundingClientRect()
			const mouseX = event.clientX - rect.left - rect.width / 2
			const mouseY = event.clientY - rect.top - rect.height / 2

			// Calculate rotation angles
			const rotateX = (mouseY / rect.height) * -20 // Adjust -20 to control vertical tilt
			const rotateY = (mouseX / rect.width) * 20 // Adjust 20 to control horizontal tilt

			// Apply rotation
			content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
		},
	},
}
</script> -->

<template>
  <main>
    <div class="scroll-container">
      <section
        ref="sectionsRef"
        class="hero"
        style="background-color: #8c2138;"
      >
        <hero />
      </section>
      <section
        ref="sectionsRef"
        class="featuredproject"
        style="background-color: #3a08b3; color: #f2b74a"
      >
      

        <featuredproject background="public/img/Axel_Stage.png">

          <featuredtext color="#7d81e"></featuredtext>
        <template v-slot:clientc>The client is a national insurance company with different products such as Bank insurance, House Insurance and a service portfolio.</template>
        <template v-slot:challengec>We have identified that the clients of the insurance are not really aware of their contract terms and specific conditions. Moreover, in situations of distress, they get really frustrated getting in touch with a human assistant to respond quickly to their queries and giving personalized assistance.</template>
        <template v-slot:solutionc>We have Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a clear and concise output to the user thanks to Generative AI. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.</template>
      </featuredproject>
      </section>

      <section
        ref="sectionsRef"
        class="featuredproject"
        style="background-color: #d37462; color: #8c2138;"
      >
      <featuredproject background="public/img/ePOD_Desktop_v1.png">
        <template v-slot:title>ePOD</template>
        <template v-slot:clientc>Jean-Louis Etienne, a well-known french doctor and explorer, started a project involving a vertical boat and an expedition in the South Pole taking place in 2024. The team wanted a website that could provide open-source data that can be understood by students and non-scientists.</template>
        <template v-slot:challengec>An interactive Digital Twin able to explain the expedition to the big audience through a 3D model and story paths and broadcast live data retrieved by the scientists in the real boat.</template>
        <template v-slot:solutionc>The challenge was to include a sustainable solution along with a digital twin and reach the big audience, designing with strong accessibility and usability standards. As well, they wanted the desktop version first, which slowed down the mobile design phase.</template>
      </featuredproject>
      </section>
<section
ref="sectionsRef"
class="cv"
  style="background-color: #3a08b3;"
>
<Resume></Resume>
</section>

      <!-- Add more sections as needed -->
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

   //perspective: 1000px; /* Control the depth of the 3D effect */
  transition: background-color 0.5s ease; /* Smooth transition for background color */
  scroll-snap-align: start; /* Snap to start of the section */
    transition: background-color 0.5s ease; /* Smooth background transition */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


}

}
</style>
