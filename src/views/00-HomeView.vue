<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import hero from "@/components/hero.vue"
import featuredproject from "@/components/featuredproject.vue"
import Resume from "../components/resume.vue"
import { useHead } from "@unhead/vue"

// SEO Setup
useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome aboard!",
})

// Background colors for sections
const sections = [
	{ backgroundColor: "#8c2138" }, // Hero section
	{ backgroundColor: "#3a08b3" }, // First project
	{ backgroundColor: "#c15544" }, // Second project
	{ backgroundColor: "#f6ca6f" }, // Resume
]

const sectionElements = ref([])
const scrollContainer = ref(null)

// Handle scroll event to change background color
const handleScroll = () => {
	const scrollPosition = scrollContainer.value.scrollTop + window.innerHeight / 2
	let activeSectionIndex = 0

	// Determine the active section based on scroll position
	for (let i = 0; i < sectionElements.value.length; i++) {
		const sectionTop = sectionElements.value[i].offsetTop
		const sectionHeight = sectionElements.value[i].offsetHeight

		if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
			activeSectionIndex = i
			break
		}
	}

	// Set background color based on the active section
	const newColor = sections[activeSectionIndex].backgroundColor
	console.log("Setting background color to:", newColor)

	// Smooth transition for background color
	document.body.style.backgroundColor = newColor
}

onMounted(async () => {
	await nextTick()
	sectionElements.value = document.querySelectorAll(".scroll-section")
	scrollContainer.value = document.querySelector(".scroll-container")

	if (!sectionElements.value.length) {
		console.error("No sections found.")
		return
	}

	// Set the initial background color
	document.body.style.backgroundColor = sections[0].backgroundColor

	// Add scroll event listener to the scroll container instead of window
	scrollContainer.value.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
	// Remove the scroll event listener
	scrollContainer.value.removeEventListener("scroll", handleScroll)
})
</script>

<template>
	<main>
		<div class="scroll-container">
			<section class="scroll-section hero">
				<hero />
			</section>
			<section class="scroll-section featuredproject" style="color: #d37462">
				<featuredproject background="./vid/Teaser_v2_EN.mp4">
	<featuredtext color="#7d81e"></featuredtext>
	<template v-slot:title>Axel, the Gen AI Insurance assistant</template>
	<template v-slot:clientc>
		A national insurance company offering a range of products, including bank and home insurance, as well as a diverse service portfolio.
	</template>
	<template v-slot:challengec>
		Clients often lack awareness of their contract terms and conditions. During stressful situations, frustration grows due to difficulty in quickly accessing personalized support from human assistants.
	</template>
	<template v-slot:solutionc>
		We designed a conversational interface powered by Generative AI to analyze insurance policies and contracts, delivering clear, concise information to users. It identifies the most advantageous conditions when contracts overlap and can even promote relevant internal products based on conversation context.
	</template>
</featuredproject>

			</section>

			<section class="scroll-section featuredproject" style="color: #54222b">
				<featuredproject background="./vid/ePOD_Teaser.png">
					<template v-slot:title>ePOD</template>
					<template v-slot:clientc
						>Jean-Louis Étienne, a renowned French doctor and explorer, launched a project featuring a vertical boat and a 2024 South Pole expedition. The team aimed to create a website offering open-source data accessible to students and non-scientists.</template
					>
					<template v-slot:challengec
						>To develop an interactive Digital Twin that explains the expedition to a broad audience through a 3D model, story paths, and live data streamed directly from the boat.</template
					>
					<template v-slot:solutionc
						>We delivered a sustainable solution with a Digital Twin designed to meet accessibility and usability standards, ensuring it resonated with a wide audience. Prioritizing a desktop-first approach added complexity but ensured a strong foundation for subsequent mobile designs.</template
					>
				</featuredproject>
			</section>

			<section class="scroll-section resume">
				<Resume></Resume>
			</section>
		</div>
	</main>
</template>

<style lang="scss">
@import "../assets/scss/_variables.scss";

body {
	transition: background-color 0.8s ease-in-out; /* Smooth transition */
}

main {
	@media (max-width: 1000px) {
		flex-direction: row;
	}

	.scroll-container {
		scroll-snap-type: y mandatory; /* Enables scroll snapping */
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
    

		.scroll-section {
			scroll-snap-align: start; /* Snap each section to the top */
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 4rem;
      @media (max-width: 1000px) {
padding-top:5arem;
    }
			// Avoid background-color in sections themselves so that body color takes over

      
      @media (max-width: 1000px) {
        padding: 1rem;
				height: fit-content;
			}
		}
		.resume {
			padding: 6rem 0;
		}
	}
}
</style>
