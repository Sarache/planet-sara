<template>
	<div class="headerbg">
		<ul class="menuheader">
			<li>
				<menuitem>
					<router-link to="/">
						<h5>Planet Sara</h5>
					</router-link>
				</menuitem>
			</li>

			<li>
				<p>✦</p>
			</li>

			<li>
				<menuitem><router-link to="/designportfolio">Design Portfolio</router-link></menuitem>
			</li>
			<li>
				<p>✦</p>
			</li>

			<li>
				<menuitem><router-link to="/contact">Resume</router-link></menuitem>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		isSubmenuActive() {
			return this.$route.path.startsWith("/about")
		},
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.headerbg {
	background: $plum-dark;
	border-radius: 0 0 2rem 2rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 5;

	@media (max-width: 1200px) {
		width: 100%;
		height: 6rem;
	}
}

ul {
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	gap: 1rem;
	color: $plum-dark;
	padding: .6rem 3rem;

	@media (max-width: 1200px) {
		flex-direction: row;
		top: 0;
		padding: 0;
		margin: 2rem;
		justify-content: space-between;
		padding: 0;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}

	li {
		a {
			font-family: Red Hat Mono;
			font-style: normal;
			font-weight: 200;
			font-size: 1rem;
			color: $plum;
			

			&:hover {
				color: $yellow;
			}
		}
		p {
			color: $plum;
		}

		h5 {
			font-weight: 900;
			transition: 01s;
			color: $plum;
			&:hover {
				color: $yellow;
			}
		}

		&:hover {
			color: $yellow;
		}
	}
}
</style>

<script></script>
