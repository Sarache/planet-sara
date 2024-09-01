<template>
	<div class="background">
		<slot></slot>
	</div>
</template>


<style scoped>
.background {
	position: fixed;
	top: 0;
	z-index: -10;
	background-color: $plum;

}
</style>
