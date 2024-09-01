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
<script></script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
div {
	margin: 10% 0;
	display: flex;
	flex-direction: column;
	flex-wrap: -2rem;
	margin-right: -2rem;
	@media (max-width: 1000px) {
		font-size: 2rem;
		margin: 1rem;
	}
}

.regular {
	-webkit-text-fill-color: $off-white;
	font-family: Red Hat Mono;
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 100;
	letter-spacing: -0.2rem;
	width: 100%;
	@media (max-width: 600px) {
		font-size: 2.5rem;
		line-height: 3.5rem;
	}
}
</style>
