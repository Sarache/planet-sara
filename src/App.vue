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

<style lang="scss" scoped>
.page-container {
	display: flex;
	flex-direction: column;
}
</style>
