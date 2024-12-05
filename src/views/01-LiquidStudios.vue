<script setup>
import { useHead } from "@unhead/vue"
import cardwindow from "@/components/cardwindow.vue"
import buttonimg from "@/components/buttonimg.vue"
import cardproject from "@/components/cardprojectv2.vue"
import featuredproject from "@/components/featuredproject.vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Liquid Studios",
})
</script>

<template>
	<main>
		<h1>Liquid Studios</h1>
		<subtitle>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</subtitle>
		<h6></h6>
		<section class="scroll-section featuredproject">
			<featuredproject background="./vid/Teaser_v2_EN.mp4">
				<featuredtext></featuredtext>
				<template v-slot:title>Axel, the Gen AI Insurance assistant</template>
				<template v-slot:clientc>
					A national insurance company offering a range of products, including bank and home insurance, as well as a diverse service
					portfolio.
				</template>
				<template v-slot:challengec>
					Clients often lack awareness of their contract terms and conditions. During stressful situations, frustration grows due to
					difficulty in quickly accessing personalized support from human assistants.
				</template>
				<template v-slot:solutionc>
					We designed a conversational interface powered by Generative AI to analyze insurance policies and contracts, delivering clear,
					concise information to users. It identifies the most advantageous conditions when contracts overlap and can even promote relevant
					internal products based on conversation context.
				</template>
			</featuredproject>
		</section>
		<div class="carousel-cards">
			<cardproject v-for="project in portfolioDataArray" :project="project"></cardproject>
		</div>

		<section class="scroll-section featuredproject">
			<featuredproject background="./vid/ePOD_Teaser.mp4">
				<template v-slot:title>ePOD</template>
				<template v-slot:clientc
					>Jean-Louis Étienne, a renowned French doctor and explorer, launched a project featuring a vertical boat and a 2024 South Pole
					expedition. The team aimed to create a website offering open-source data accessible to students and non-scientists.</template
				>
				<template v-slot:challengec
					>To develop an interactive Digital Twin that explains the expedition to a broad audience through a 3D model, story paths, and live
					data streamed directly from the boat.</template
				>
				<template v-slot:solutionc
					>We delivered a sustainable solution with a Digital Twin designed to meet accessibility and usability standards, ensuring it
					resonated with a wide audience. Prioritizing a desktop-first approach added complexity but ensured a strong foundation for
					subsequent mobile designs.</template
				>
			</featuredproject>
		</section>
	</main>
</template>

<script>
import { portfolioData } from "../data.js"

const portfolioDataArray = Object.values(portfolioData)
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

main {
	width: 100%;
	height: 100%;
	padding: 4rem;
	background-color: $acn;
	color: $yellow;
	transition: background-color 1s ease-in;

	.portfolio-content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin-top: 4rem;
	}
}
h1 {
	margin-bottom: 2rem;
}
.carousel-cards {
	display: flex;
	flex-wrap: wrap;
	gap: 4rem;
	margin-top: 4rem;
}
</style>
