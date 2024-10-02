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
				<featuredproject background="./img/Axel_Featured.png">
					<featuredtext color="#7d81e"></featuredtext>
          <template v-slot:title>Axel, the Gen AI Insurance asisstant</template>
					<template v-slot:clientc
						>The client is a national insurance company with different products such as Bank insurance, House Insurance and a service
						portfolio.</template
					>
					<template v-slot:challengec
						>We have identified that the clients of the insurance are not really aware of their contract terms and specific conditions.
						Moreover, in situations of distress, they get really frustrated getting in touch with a human assistant to respond quickly to
						their queries and giving personalized assistance.</template
					>
					<template v-slot:solutionc
						>We have Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a
						clear and concise output to the user thanks to Generative AI. It is also capable of defining the most profitable condition when
						two or more contracts overlap, or even promote internal products based in the context of the conversation.</template
					>
				</featuredproject>
			</section>

			<section class="scroll-section featuredproject" style="color: #54222b">
				<featuredproject background="./img/ePOD_Featured.png">
					<template v-slot:title>ePOD</template>
					<template v-slot:clientc
						>Jean-Louis Etienne, a well-known french doctor and explorer, started a project involving a vertical boat and an expedition in
						the South Pole taking place in 2024. The team wanted a website that could provide open-source data that can be understood by
						students and non-scientists.</template
					>
					<template v-slot:challengec
						>An interactive Digital Twin able to explain the expedition to the big audience through a 3D model and story paths and broadcast
						live data retrieved by the scientists in the real boat.</template
					>
					<template v-slot:solutionc
						>The challenge was to include a sustainable solution along with a digital twin and reach the big audience, designing with strong
						accessibility and usability standards. As well, they wanted the desktop version first, which slowed down the mobile design
						phase.</template
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
			height: 90vh;
		}
	}
}
</style>
