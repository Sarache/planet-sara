<template>
	<div class="resumeheader">
		<subtitle>Resume</subtitle>
		<h1>Sara Jover - Interaction & Digital crafter</h1>
		<div class="stripe">
			<body>Creativity, Interaction & Sustainability   ✦   sarajotaeme@gmail.com   ✦   Madrid, Spain</body>
		</div>
	</div>
	<div class="resumecontent">
		<div class="experience">
			<h4 class="explabel">Relevant experience</h4>
			<div class="experienceitem">
				<div class="date">April 1, 2022 → Now</div>
				<div class="content">
					<h6>Senior UX/UI Designer ·yat Liquid Studios</h6>
					<p>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<div class="date">April 1, 2022 → Now</div>
				<div class="content">
					<h6>Senior UX/UI Designer · Liquid Studios</h6>
					<p>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<div class="date">April 1, 2022 → Now</div>
				<div class="content">
					<h6>Senior UX/UI Designer · Liquid Studios</h6>
					<p>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</p>
				</div>
			</div>
		</div>
		<div class="education">
			<h4 class="explabel">Education</h4>
			<div class="educontent">
				<div class="date">April 1, 2022 → Now</div>
				<div class="content">
					<h6>Senior UX/UI Designer · Liquid Studios</h6>
					<p>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";


.resumeheader {
	.stripe {
		background: $off-black;
		position: absolute;
		left: 0;
		margin: 0 -4rem;
		width: 99vw;
		display: flex;
		color: $yellow-200;
		z-index: 3; 

		body {

width: 100%;
text-align: center;

		}



	}
		


}

.resumecontent {
		display: flex;
		flex-direction: row;
		gap: 2rem;


		.experience {
			width:150%;
			padding-top: 4rem;
			background-color: $yellow-200;
		}
	}
</style>
