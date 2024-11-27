<template>
	<portfolioDetail :detail-data="detailData" />
</template>

<script setup>
import { portfolioData } from "../data.js"

import { useRoute } from "vue-router"
import { useHead } from "@unhead/vue"

import portfolioDetail from "../components/portfolioDetail.vue"

const route = useRoute()

const detailData = portfolioData[route.params.label]

useHead({
	title: detailData.title,
})
</script>

<style lang="scss" scoped>
main {
	padding: 4rem;
	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		width: 100%;


		.portfolioitem-section {
			display: flex;
			gap: 4rem;
			width: 100%;
			padding: 4rem;
			.portfoliosection-content {
			}
		}
	}
}
</style>
