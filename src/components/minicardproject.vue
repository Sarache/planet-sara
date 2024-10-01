<template>
	<router-link :to="{ name: 'portfolioitem', params: { label: project.label } }">
		<div class="project">
			<div class="project-overlay">
				<h6>{{ project.title }}</h6>
				<div class="tag-container">
					<div class="tags" v-for="tag in project.tags" :key="tag">
						<div class="tag">{{ tag }}</div>
					</div>
				</div>
			</div>
			<div class="project-bg" :style="{ backgroundImage: `url(${project.imageUrl})` }"></div>
		</div>
	</router-link>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

a {
	&:hover {
		-webkit-text-fill-color: $off-white;
		background-size: 100%;
	}
}

.template {
	gap: 2rem;
}

.project {
	justify-content: space-between;
	align-items: flex-start;
	align-self: stretch;
	gap: 2rem;
	display: flex;
	flex-direction: column;
	border-radius: 1.5rem;
	border: 1px solid $off-black;
	overflow: hidden;
	position: relative; /* Needed for the absolute positioning of project-bg */
	z-index: 4;
	transition: 1s;

	&:hover .project-bg {
		background-size: 110%;
		opacity: 0.6;
		filter: blur(0px);
	}

	h6 {
		color: $blue-200;
		transition: font-size 0.5s;
	}

	&:hover .project-overlay h6 {
		font-size: 2rem; /* Change to desired font size */
		transition: font-size 1s;
	}

	&:hover .project-overlay .description {
		opacity: 0;
		transition: opacity 1s;
	}

	.project-overlay {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 2rem 2rem 1rem 2rem;
		gap: 1.5rem;
		z-index: 2; /* Ensures overlay is above background */
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
		z-index: -1; /* Places background behind content */

		transition: background-size 1s, opacity 1s, filter 1s;
	}

	.tag-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		.tag {
			display: flex;
			padding: 0.4rem 1rem 0.5rem 1rem;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			border-radius: 4.375rem;
			background: var(--Blue-sky, #5146cf);
			color: var(--off-white, #9fc8d9);
			font-family: Victor Mono;
			font-size: 1rem;
			font-style: italic;
			font-weight: 400;
			line-height: 0.5rem; /* 66.667% */
			letter-spacing: -0.015rem;
		}
	}
}
</style>

<script>
export default {
	props: ["project"],
}
</script>
