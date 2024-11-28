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
			return this.background.endsWith(".mp4");
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

@media (max-width: 1300px) {
	.featuredcontent {
		flex-direction: column; // Stack on smaller screens



		/* Style for video */


	/* Style for image */
	div {
		width: 100%;
		background-size: cover;
		background-position: center;
		border-radius: 0.5rem;
	}

		.featuredpicture {
			padding-top: 75%;
			border-radius: 0.5rem;
			overflow: hidden; 
		}


		.featuredtext {
			width: 100%; // Full width on smaller screens
			padding-left: 0; // Remove padding for mobile
		}
	}
}


subtitle {

  @media (max-width: 1300px) {
padding-top: 4rem;
	}
}

h1 {
	padding-bottom: 2rem;
	letter-spacing: -3.5pt;



}

.featuredcontent {
	align-items: center;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 80vh;
	gap: 2rem;

	@media (max-width: 1300px) {
		flex-direction: column;
	}

	.featuredpicture {
		width: 100%;
		background-size: contain;
		background-position: cover;
		background-repeat: no-repeat;
		border-radius: 0.5rem;
		overflow: hidden; 
	}

	.featuredtext {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 30%;

		@media (max-width: 1300px) {
			width: 100%;
      height: 100%;
		}

		.button {
			background-color: $off-black;
			mix-blend-mode: overlay;
			padding: .5rem 2rem .5rem 2.5rem;
			border-radius: 0 0 4rem 4rem ;
			display: flex;
			gap: 1rem;
			font-family: Victor Mono;
			font-style: italic;
			font-weight: 700;
			width: fit-content;
			color: $off-white;

			img {
				width: 1.5rem;
				rotate: 45deg;

			}

		}
	}
}
</style>
