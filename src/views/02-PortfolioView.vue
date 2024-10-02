<script setup>
import { useHead } from "@unhead/vue"
import cardproject from "../components/cardproject.vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Design Portfolio",
})
</script>

<template>
	<main>
		<h1 class="hero">Portfolio</h1>
		<div class="portfolio-content">
			<cardproject v-for="project in portfolioDataArray" :project="project"></cardproject>
		</div>
	</main>
</template>

<script>
import { portfolioData } from "../data.js"

const portfolioDataArray = Object.values(portfolioData)
</script>
<style lang="scss" scoped>
main {
	width: 100%;
	height: 100%;
	gap: 2rem;
	padding: 4rem;



	.portfolio-content {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		margin-top: 4rem;

	}
}
</style>
