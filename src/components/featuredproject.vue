<template>
	<subtitle>Featured case studies</subtitle>
	<h1><slot name="title"></slot></h1>
	<div class="featuredcontent">
		<div v-if="isVideo" class="featuredpicture">
			<video autoplay muted loop :src="background" class="featuredvideo"></video>
		</div>
		<div v-else class="featuredpicture is-image" :style="{ backgroundImage: `url(${background})` }"></div>
		<div class="featuredtext">
			<div v-if="hasClientContent" class="featsection">
				<h4>The client</h4>
				<p><slot name="clientc"></slot></p>
			</div>
			<div class="featsection">
				<h4>The challenge</h4>
				<p><slot name="challengec"></slot></p>
			</div>
			<div class="featsection">
				<h4>The solution</h4>
				<p><slot name="solutionc"></slot></p>
			</div>
			<div class="button">
				<slot name="button">See case study</slot>
				<img class="iconarrow" src="/public/arrow-bold.svg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		background: {
			type: String,
			default: "./img/Axel_3D.png", // Default fallback background
		},
	},
	computed: {
		isVideo() {
			// Dynamically determine if the background is a video
			return /\.(mp4|webm|ogg)$/.test(this.background)
		},
		hasClientContent() {
			// Check if the slot for 'clientc' has content
			return this.$slots.clientc && this.$slots.clientc().length > 0
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.featuredcontent {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 80vh;
	gap: 2rem;

	@media (max-width: 1300px) {
		flex-direction: column;
		height: auto;
		gap: 1rem;
	}

	.featuredpicture {
		flex: 2;
		width: 100%;
		border-radius: 0.5rem;
		overflow: hidden;

		&.is-image {
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}

		video.featuredvideo {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.featuredtext {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		width: 40%;
		color: inherit;
		@media (max-width: 1300px) {
			width: 100%;
			padding: 0;
		}

		h4 {
			font-size: 1.4rem;
			margin-bottom: 0.5rem;
			color: inherit;
			@media (max-width: 1300px) {
				font-size: 1.1rem;
			}
		}

		p {
			font-size: 1rem;
			line-height: 1.5;
			color: inherit;
			@media (max-width: 1300px) {
				line-height: 1.2;
			}
		}

		.button {
			background-color: $off-black;
			mix-blend-mode: overlay;
			padding: 0.5rem 2rem;
			border-radius: 0 0 4rem 4rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			font-family: Victor Mono, monospace;
			font-style: italic;
			font-weight: 700;
			color: $off-white;
			margin: 1rem auto 0;

			img {
				width: 1.5rem;
				transform: rotate(45deg);
			}

			@media (max-width: 1300px) {
				width: 100%;
				justify-content: center;
			}
		}
	}
}
</style>
