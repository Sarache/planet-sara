<template>
	<router-link :to="{ name: 'portfolioitem', params: { label: project.label } }" class="project-link">
		<div class="project">
			<div class="project-overlay">
				<h6>{{ project.title }}</h6>
				<div class="description">{{ project.description }}</div>
				<div class="scroller">
					<div class="tag-container scroller__inner">
						<div class="tags" v-for="tag in project.tags" :key="tag">
							<div class="tag">{{ tag }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="project-bg" :style="{ backgroundImage: `url(${project.imageUrl})` }"></div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		const scrollers = this.$el.querySelectorAll(".scroller")

		// If a user hasn't opted in for reduced motion, then we add the animation
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			this.addAnimation(scrollers)
		}
	},
	methods: {
		addAnimation(scrollers) {
			scrollers.forEach((scroller) => {
				// add data-animated="true" to every `.scroller` on the page
				scroller.setAttribute("data-animated", true)

				// Make an array from the elements within `.scroller-inner`
				const scrollerInner = scroller.querySelector(".scroller__inner")
				const scrollerContent = Array.from(scrollerInner.children)

				// For each item in the array, clone it
				// add aria-hidden to it
				// add it into the `.scroller-inner`
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true)
					duplicatedItem.setAttribute("aria-hidden", true)
					scrollerInner.appendChild(duplicatedItem)
				})
			})
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.project-link {
	flex: 1 1 calc(50% - 2rem); // Two projects per row with gap
	max-width: calc(50% - 2rem);

	@media (max-width: 768px) {
		flex: 1 1 100%; // One project per row on smaller screens
		max-width: 100%;
	}

	@media (min-width: 1600px) {
		flex: 1 1 calc(32% - 2rem); // Two projects per row with gap
		max-width: calc(32% - 2rem);
	}
}

.project {
	display: flex;
	flex-direction: column;
	border-radius: 1.5rem;
	border: 1px solid $blue-sky;
	overflow: hidden;
	position: relative; /* Needed for the absolute positioning of project-bg */
	transition: 1s;
	z-index: 4;
	height: 300px; /* Set a fixed height for the card */
	max-width: 100%; /* Ensure the card doesn't expand beyond its parent */

	&:hover .project-bg {
		opacity: 0.6;
		filter: blur(0px);
		background: center center/cover no-repeat;
		background-size: 110%;
		transition: background-size 0.5s, opacity 0.2s, filter 1s;
	}

	h6 {
		color: $blue-200;
		transition: font-size 0.5s;
		position: absolute;
		top: 2rem;
		left: 2rem;
		right: 2rem;
	}

	&:hover .project-overlay h6 {
		font-size: 2rem; // Change to desired font size
		transition: font-size 1s;
		-webkit-text-fill-color: $off-white;
		height: 100%;
	}

	&:hover .project-overlay .tag-container {
		-webkit-text-fill-color: $off-white;
	}

	.description {
		position: absolute;
		top: 6rem;
		left: 2rem;
		right: 2rem;
		transition: opacity 0.5s;
		line-height: 1.2;
		font-family: "Red Hat Mono";
		font-weight: regular;
		font-size: 1.2rem;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}

	&:hover .project-overlay .description {
		opacity: 0;
		transition: opacity 0.3s;
		height: 100%;
	}

	.project-overlay {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
		gap: 1.5rem;
		z-index: 2; // Ensures overlay is above background
	}

	.project-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		opacity: 0.1;
		background: center center/cover no-repeat;
		background-size: 120%;
		filter: blur(16px);
		z-index: -1; // Places background behind content
		transition: background-size 1s, opacity 1s, filter 1s;
	}
	.scroller {
		margin-top: auto;
		bottom: 0.5rem;
		left: 0rem;
		right: 2rem;
		background: $off-black;
		overflow: hidden;

		.tag-container {
			display: flex;
			width: max-content;
			gap: 2rem;

			.tag {
				padding: 0.5rem 1rem;
				justify-content: center;
				align-items: center;

				background: $off-black;
				color: $blue-200;
				font-family: Red Hat Mono;
				text-transform: uppercase;
				font-size: 1rem;
				font-weight: 800;
				line-height: 0.5rem; // 66.667%
				letter-spacing: -0.015rem;
				text-shadow: -0.5px -0.5px 0.5px $blue-800, 1px 1px 0.5px $gray-800;
			}
		}
	}

	.scroller[data-animated="true"] {
		overflow: hidden;
	}

	.scroller[data-animated="true"] .scroller__inner {
		flex-wrap: nowrap;
		animation: scroll var(--_animation-duration, 30s) var(--_animation-direction, forwards) linear infinite;
	}

	.scroller[data-direction="right"] {
		--_animation-direction: reverse;
	}

	.scroller[data-direction="left"] {
		--_animation-direction: forwards;
	}

	.scroller[data-speed="fast"] {
		--_animation-duration: 20s;
	}

	.scroller[data-speed="slow"] {
		--_animation-duration: 60s;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 1rem));
		}
	}
}
</style>
