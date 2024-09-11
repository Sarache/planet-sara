<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue"
import { RouterView } from "vue-router"
import Background from "./components/background.vue"
</script>
<template>
	<HeaderMenu />
	<div ref="pageContainer" class="pagecontainer" @mousemove="handleMouseMove">
		<div ref="pageContent" class="pagecontent">
			<RouterView />
		</div>
	</div>

	<Background> </Background>
</template>

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
			const container = this.$refs.pageContainer
			const content = this.$refs.pageContent

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

<style lang="scss" scoped>
.pagecontainer {


	.pagecontent {
		transition: transform 0.1s ease-out; /* Smooth transition */

	}
}
</style>
