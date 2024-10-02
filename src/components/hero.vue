<template>
	<div>
		<h1 class="regular">¡Hola! You are in</h1>
		<h1 class="hero">Sara Jover's creative realm.</h1>

		<br />
		<h1 class="regular">Find here all about</h1>
		<h1 class="hero">Digital Services & Media Production</h1>
		<h1 class="hero"></h1>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

div {
	display: flex;
	flex-direction: column;
	align-self: center; /* Center the div within its parent if needed */
	justify-content: center; /* Center content vertically */
	align-items: center; /* Center content horizontally */
	flex-wrap: wrap; /* Flex-wrap to manage how items are wrapped */
	height: 90vh;
	padding: 8rem;

	@media (max-width: 1000px) {
		padding: 0;
	}
}

.regular {
	color: $yellow-400;
	font-family: Red Hat Mono;
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 100;
	letter-spacing: -0.2rem;

	@media (max-width: 600px) {
	}
}

.hero {
	color: $yellow-400;
}

</style>
