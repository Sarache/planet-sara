<template>
	<subtitle>Featured case studies</subtitle>
	<h1><slot name="title">Project title example</slot></h1>
	<div class="featuredcontent">
		<div v-if="isVideo" class="featuredpicture">
			<video autoplay muted loop :src="background" class="featuredvideo"></video>
		</div>
		<div v-else class="featuredpicture" :style="{ backgroundImage: `url(${background})` }"></div>
		<div class="featuredtext" :style="{ color: `${color}` }">
			<div class="featsection">
				<h4>The client</h4>
				<p><slot name="clientc">example</slot></p>
			</div>
			<div class="featsection">
				<h4>The challenge</h4>
				<p><slot name="challengec"></slot></p>
			</div>
			<div class="featsection">
				<h4>The solution</h4>
				<p><slot name="solutionc"></slot></p>
			</div>
			<div class="button"><slot name="button">See case study</slot><img class="iconarrow" src="/public/arrow-bold.svg" /></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		background: {
			type: String,
			default: "/public/img/Axel_3D.png", // Default background
		},
	},
	computed: {
		isVideo() {
			// Check if the background prop is a video file based on its extension
			return this.background.endsWith(".mp4")
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.featuredcontent {
	display: flex;
	flex-direction: row; /* Default layout for larger screens */
	align-items: center;
	width: 100%;
	height: 80vh;
	gap: 2rem;

	@media (max-width: 1300px) {
		flex-direction: column; /* Stack items for smaller screens */
		height: auto; /* Allow height to adjust based on content */
		gap: 1rem;
	}

	.featuredpicture {
		flex: 2; /* Take 2/3 of space on larger screens */
		width: 100%;
		border-radius: 0.5rem;
		overflow: hidden;
		position: relative;

		// Video styling
		video.featuredvideo {
			width: 100%; /* Ensure video fills the container */
			height: 100%; /* Maintain full container coverage */
			object-fit: cover; /* Prevent stretching */
		}

		// Image styling (background)
		&.is-image {
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			min-height: 300px; /* Ensure a minimum height for images */
		}
	}

	.featuredtext {
		flex: 1; /* Take 1/3 of space on larger screens */
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		width: 40%; /* Constrain width on larger screens */

		@media (max-width: 1300px) {
			width: 100%; /* Full width on mobile */
			padding: 0; /* Remove extra padding */
		}

		h4 {
			font-size: 1.4rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1rem;
			line-height: 1.5; /* Improve text readability */

			@media (max-width: 1300px) {
				line-height: 1.1rem;
			}
		}

		.button {
			background-color: $off-black;
			mix-blend-mode: overlay;
			padding: 0.5rem 2rem 0.5rem 2.5rem;
			border-radius: 0 0 4rem 4rem;
			display: flex;
			gap: 1rem;
			font-family: Victor Mono;
			font-style: italic;
			font-weight: 700;
			width: fit-content;
			color: $off-white;
			margin: 1rem auto 0; /* Center-align on mobile */
			just: center;

			img {
				width: 1.5rem;
				transform: rotate(45deg); /* Adjust rotation */
			}

			@media (max-width: 1300px) {
				margin: 1rem auto; /* Center-align button */
				width: 100%;
			}
		}
	}
}
</style>
