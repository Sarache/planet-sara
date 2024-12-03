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
				<menuitem>
					<router-link to="/liquidstudios">Liquid Studios</router-link>
				</menuitem>
			</li>
			<li>
				<p>✦</p>
			</li>
			<li>
				<menuitem>
					<router-link to="/nicecactus">Nicecactus</router-link>
				</menuitem>
			</li>
			<li>
				<p>✦</p>
			</li>
			<li>
				<menuitem>
					<router-link to="/Fanzie">Fanzie</router-link>
				</menuitem>
			</li>
			<li>
				<p>✦</p>
			</li>
			<li>
				<menuitem>
					<router-link to="/contact">Resume</router-link>
				</menuitem>
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
	display: flex;
	align-items: center;
	justify-content: center; // Center the content horizontally
	border-radius: 0 0 2rem 2rem;
	position: fixed;
	top: 0; // Position at the top
	left: 50%; // Start from the center of the viewport
	transform: translateX(-50%); // Center it
	z-index: 5;
	margin: 0;

width: fit-content; // Only take space needed for content
	max-width: 90%; // Ensure responsiveness on smaller screens
	overflow: hidden; // Prevent unintended overflow
	white-space: nowrap; // Prevent text wrapping at all breakpoints

	@media (max-width: 1000px) {
		gap: 0.2rem;
		max-width: 90%;
    max-width: 100%; // Ensure responsiveness on smaller screens

	}
}

.menuheader {
	display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: center;
	gap: 1rem;
	color: $plum-dark;
	margin: 0 3rem;
	padding: .5rem 0 ;

  	@media (max-width: 1000px) {
		gap: 0.5rem;
		width: 100%;
    overflow-x: scroll;

		margin: 0 1rem;
    }
	li {
		a {
			font-family: Red Hat Mono;
			font-style: normal;
			font-weight: 200;
			font-size: 1rem;
			color: $plum;
			display: flex;

			&:hover {
				color: $yellow;
			}
		}

		p {
			color: $plum;
		}

		h5 {
			font-weight: 900;
			transition: 0.1s;
			color: $plum;

			&:hover {
				color: $yellow;
			}
		}

		&:hover {
			color: $yellow;
		}

		@media (max-width: 1000px) {
			font-size: 0.8rem;
		}
	}
}
</style>
