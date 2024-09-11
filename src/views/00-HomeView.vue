<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import hero from "@/components/hero.vue";
import featuredproject from "@/components/featuredproject.vue";
import { useHead } from "@unhead/vue";

// SEO Setup
useHead({
  title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome aboard!",
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
        style="background-color: #ffc107;"
      >
        <featuredproject />
      </section>
      <section
        ref="sectionsRef"
        class="featuredproject"
        style="background-color: #3a08b3;"
      >
        <featuredproject />
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

height: auto;
   //perspective: 1000px; /* Control the depth of the 3D effect */
  transition: background-color 0.5s ease; /* Smooth transition for background color */


}


sectionsRef {
  //transform-style: preserve-3d; /* Enable 3D transforms */
    padding: 4rem;
	header {
		margin-bottom: 2rem;
	}
}
}
</style>
