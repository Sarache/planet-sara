<template>
	<div class="resumeheader">
		<subtitle>Resume</subtitle>
		<h1>Sara Jover - Interaction & Digital crafter</h1>
		<div class="stripe">
			<body>
				Creativity, Interaction & Sustainability   ✦   sarajotaeme@gmail.com   ✦   Madrid, Spain
			</body>
		</div>
	</div>
	<div class="resumecontent">
		<div class="experience">
			<h4 class="explabel">Relevant experience</h4>
			<div class="experienceitem">
				<bodysmall class="date">April 1, 2022 → Now</bodysmall>
				<div class="content">
					<h6>Senior Product Designer ✳︎ Liquid Studios</h6>
					<bodysmall>Accenture France ✦ Metaverse, GenAI, Digital Twin, MLL, DesignOps, Ideation workshops</bodysmall>
					<p>Worked within my innovation team to deliver +20 PoCs, MVP and research summaries & analysis in 2 and a half years.</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<bodysmall class="date">September 1, 2020 → March 31, 2022</bodysmall>
				<div class="content">
					<h6>Product Designer ✳︎ Tournament / B2B</h6>
					<bodysmall>Nicecactus.gg ✦ eSports all-in-one platform</bodysmall>
					<p>
						Focused on the tournament and partner site products, I delivered +200 detailed screens based on a deep and human research, both
						for the front and back office.
					</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<bodysmall class="date">March 1, 2020 → July 1, 2020</bodysmall>
				<div class="content">
					<h6>Service Designer & Visual Creator</h6>
					<bodysmall>Ecodicta ✦ Sustainable fashion & circular closet</bodysmall>
					<p>
						Being the only designer made me be the creative director so I could deliver consistent web & mobile designs, newsletters, photos
						and videos that resonate with Ecodicta’s users.
					</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<bodysmall class="date">March 1, 2016 → September 1, 2019</bodysmall>
				<div class="content">
					<h6>Production Specialist ✳︎ Creative Designer</h6>
					<bodysmall>BCG ✦ Boston Consulting Group</bodysmall>
					<p>
						Deeply involved in the internal client branding presentations, me & my team have been crucial in strategic client partnerships
						and art direction of their products.
					</p>
				</div>
			</div>
			<div class="separator"></div>
			<div class="experienceitem">
				<div class="content">
					<bodysmall class="date">July 1, 2011 → July 1, 2013</bodysmall>
					<h6>Photo & video editing professor ✳︎ coordinator</h6>
					<bodysmall>Universidad de Comillas ICAI ✦ Salvador Soler foundation </bodysmall>
					<p>
						Worked in the syllabus conception, organization and staff management of the Photo & Video editing course for several years, as
						well as participating as a professor for the most advanced level.
					</p>
				</div>
			</div>
		</div>
		<div class="educationskills">
			<div class="education">
				<h4 class="explabel">Education</h4>
				<div class="experienceitem">
					<div class="date">September 2019 → September 2020</div>
					<div class="content">
						<h6>Interaction Design Master’s degree</h6>
						<bodysmall>ESD Madrid</bodysmall>
					</div>
				</div>
				<div class="separator"></div>
				<div class="experienceitem">
					<div class="date">September 1, 2011 → September 1, 2015</div>
					<div class="content">
						<h6>Media studies degree</h6>
						<bodysmall>Universidad Carlos III de Madrid + Erasmus year in Paris Panthéon - Sorbonne</bodysmall>
					</div>
				</div>
				<div class="separator"></div>

				<div class="experienceitem">
					<bodysmall class="date">June 1, 2012 → July 31, 2012</bodysmall>
					<div class="content">
						<h6>Photographer and 3D modeling courses</h6>
						<bodysmall>Saint Martin’s School of Arts London</bodysmall>
					</div>
				</div>
			</div>
			<div class="education">
				<h4 class="explabel">Skills</h4>
				<div class="experienceitem">
					<div class="content">
						<h6>Languages</h6>
						<p>Spanish ✳︎✳︎✳︎✳︎ French ✳︎✳︎✳︎✳︎ English ✳︎✳︎✳✳︎ Italian ✳︎✳︎</p>
					</div>
				</div>
				<div class="separator"></div>
				<div class="experienceitem">
					<div class="content">
						<h6>Hard skills</h6>
						<p>Human Computer Interaction ✳︎ Interface design ✳︎ Graphic Design ✳︎ Videography & motion graphics ✳︎ Sound engineering</p>
					</div>
				</div>
				<div class="separator"></div>
				<div class="experienceitem">
					<div class="content">
						<h6>Soft skills</h6>
						<p>Fast delivery ✳︎ Pixel-perfectionist ✳︎ Good feedback receiver ✳︎ Process and optimization oriented ✳︎ Overly creative</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";


.resumeheader {
	display: flex;
	flex-direction: column;
	gap: 0rem;
	padding: 0 4rem;

	@media (max-width: 1000px) {
		padding: 0 1rem;
	}

	.stripe {
		background: $off-black;
		width: 100vw;
		margin: 1rem -4rem 0;
		display: flex;
		color: $yellow-200;
		z-index: 3;

		@media (max-width: 1000px) {
			margin: 1rem -1rem 0;	}

		body {
			width: 100%;
			text-align: center;
		}
	}
}

.resumecontent {
	display: flex;
	flex-direction: row;

	@media (max-width: 1000px) {
		flex-direction: column;
	}

	bodysmall {
		color: $plum;
	}
	.experience {
		width: 150%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;


		@media (max-width: 1000px) {
			width: 100%;
			}
	}
	.experienceitem {
		display: flex;
		flex-direction: column;
		gap: 0rem;
	}
	.separator {
		height: 1px;
		width: 100%;
		background-color: $coral;
	}

	.educationskills {
		padding: 2rem;
		background-color: $yellow-400;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		color: $plum;

		.education {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
}
</style>
