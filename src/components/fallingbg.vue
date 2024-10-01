<template>
	<div class="falling-container">
		<div
			v-for="(element, index) in fallingElements"
			:key="index"
			class="falling-object"
			:style="{
				backgroundImage: `url(${element.src})`,
				left: `${element.left}%`,
				animationDelay: `${element.delay}s`,
				animationDuration: `${element.duration}s`,
				width: `${element.size}px`,
				height: `${element.size}px`,
				rotate: `${element.rotation}deg`,
			}"
		></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { ref } from "vue"

const fallingElements = ref<Array<{ src: string; left: number; rotation: number; delay: number; duration: number; size: number }>>([])

const generateFallingObjects = () => {
	const elements = [
		{ src: "./img/doodles/Artboard1.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard2.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard3.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard4.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard5.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard6.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard7.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard8.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard9.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard10.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard11.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard12.png", sizeMultiplier: 1 },
		{ src: "./img/doodles/Artboard13.png", sizeMultiplier: 1 },
	]

	const totalObjects = 25

	const maxDelay = 5

	const maxDuration = 30
	const minDuration = 8

	const maxSize = 300
	const minSize = 120

	const maxRotation = 15

	for (let i = 0; i < totalObjects; i++) {
		const { src, sizeMultiplier } = elements[Math.floor(Math.random() * elements.length)]

		const horizontalPosition = Math.floor(Math.random() * 100) // Use each specified start position

		const delay = Math.floor(Math.random() * maxDelay)
		const duration = Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration)
		const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize) * sizeMultiplier
		const rotation = Math.random() < 0.5 ? Math.floor(Math.random() * maxRotation) : -Math.abs(Math.floor(Math.random() * maxRotation))

		fallingElements.value = [
			...fallingElements.value,
			{
				src,
				left: horizontalPosition,
				rotation,
				delay,
				duration,
				size,
			},
		]
	}
}

onMounted(() => {
	generateFallingObjects()
})
</script>

<style scoped lang="scss">
/* Container for the falling elements */
.falling-container {
	mix-blend-mode: overlay;
	opacity: 20%;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	pointer-events: none; /* Prevents interference with user interactions */
	overflow: hidden; /* Ensures objects are hidden when they exit the screen */
	z-index: -1; /* Places it behind other content */
}

/* Styles for each falling object */
.falling-object {
	display: block;
	position: absolute;
	top: -300px; /* Start slightly above the screen */
	background-size: contain;
	background-repeat: no-repeat;
	animation-name: fall;
	animation-timing-function: linear;
	animation-iteration-count: infinite; /* Keep falling in a loop */
}

/* Keyframes for the falling animation */
@keyframes fall {
	0% {
		transform: translateY(0); /* Start at the top */
	}
	100% {
		transform: translateY(140vh); /* End at the bottom of the viewport */
	}
}
</style>
