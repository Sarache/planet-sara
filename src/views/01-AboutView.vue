<script setup>
import { useHead } from "@unhead/vue"
import cardwindow from "@/components/cardwindow.vue"
import buttonimg from "@/components/buttonimg.vue"
import cardproject from "@/components/cardprojectv2.vue"

useHead({
	title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Liquid Studios",
})
</script>

<template>
	<main>
		<h1>Liquid Studios</h1>
		<subtitle>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</subtitle>
		<div class="carousel-cards">
			<cardproject v-for="project in portfolioDataArray" :project="project"></cardproject>
		</div>
		<h6>hola qué tal</h6>
	</main>
</template>

<script>
import { portfolioData } from "../data.js"

const portfolioDataArray = Object.values(portfolioData)

</script>


<style lang="scss" scoped>
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
