<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue"
import { RouterView } from "vue-router"
import Fallingbg from "@/components/fallingbg.vue"
</script>

<template>
	<HeaderMenu />
	<Fallingbg />
	<div ref="pageContainer" class="page-container">
		<RouterView />
	</div>
</template>

<style scoped>
.page-container {
	height: 100vh; /* Full screen height */
	overflow: hidden; /* Disable default scrolling */
	display: flex;
	flex-direction: column;
}
</style>
