<template>
	<main class="portfolioitem-content">
		<div class="portfolioitem-section">
			<div class="portfoliosection-content">
				<h3><slot name="title1">First Value Proposition</slot></h3>
				<body>
					<slot name="body1">
						After numerous working sessions and touch points, we elaborated a value proposition canvas to showcase the most relevant
						features and how can it improve user experience and adoption.</slot
					>
				</body>
				<slot name="img1">
					<img src="/img/Axel_ValueProp.svg" alt="Value Proposition canvas" />
				</slot>
			</div>
		</div>

		<div class="portfolioitem-section">
			<div class="portfoliosection-content">
				<h3>Designing the storytelling</h3>
				<body>
					To convey our solution and bring up all the advantages, we needed to create a coherent, realistic and relatable story. The story
					is set in France and Switzerland and we are following John, a freelance architect that loves winter sports and wants to prepare a
					ski holiday in Switzerland. The story tells 4 key moments in John's trip: the first interactions with Axel for basic insurance
					questions and early user adoption, the car rental website policies, a terrible accident happening outside of the European
					territory and after the accident recovery. <br />
					Each moment represents a feature or a capability:
					<ul>
						<br />
						<li>
							<strong>Step 1</strong>: It shows the first interactions with Axel after downloading the app and how to use it. John asks
							questions through speech-to-text and gets reliable and precise answers, he also gets the whole conversation transcript in his
							mailbox.
						</li>
						<br />
						<li>
							<strong>Step 2</strong>: John needs to rent a car, but is unsure of the coverage of its own policy and asks Axel if he needs
							to get the website insurance, getting a comparison of his own contract and the one provided. After finding Axel very useful,
							he uploads his other contracts, such as Health and Home insurance. Now Axel can advise in other fields and with other
							contracts.
						</li>
						<br />
						<li>
							<strong>Step 3</strong>: John causes a terrible accident while skiing and has broken someone's ski material. He is injured and
							has to be taken to the nearest hospital in Switzerland, being a private healthcare system. After providing Axel with this
							information, John can ask for refund from his public healthcare system and other services thanks to his insurance policy "Snow
							and Mountain", covering every ski accident worldwide.
						</li>
						<br />
						<li>
							<strong>Step 4</strong>: John is victim of a theft while he was shopping. His car has broken glass and he lost his new pair of
							ski. Axel provided the nearest repair center and the actionnables to get the stolen objects refunded.
						</li>
					</ul>
				</body>
				<iframe
					style="border: 1px solid rgba(0, 0, 0, 0.1)"
					width="100%"
					height="900px"
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhdSf4iVYBgO4kO0bSwSH0C%2FCompanion%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2146-6296%26viewport%3D40%252C390%252C0.04%26t%3Dw8lkfNOrdHFRxqYD-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D2146%253A6296%26show-proto-sidebar%3D1%26mode%3Ddesign"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</main>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			project: null,
		}
	},
	methods: {
		async getProject() {
			this.project = await axios.get("/api/projects/" + $route.params.label + ".json")
		},
	},
}
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	.portfolioitem-content {
		display: flex;
		flex-wrap: wrap;
		gap: 8em;
		align-self: center;

		.portfolioitem-section {
			display: flex;
			margin: 0;
			gap: 4rem;

			.portfoliosection-content {
				display: flex;
				flex-direction: column;
				width: 100%;
				gap: 1rem;

				img {
					opacity: 60%;
					width: 100%;
					transition-property: opacity;
					transition-duration: 0.5s;
					transition-timing-function: linear;
					&:hover {
						opacity: 100%;
					}
				}
			}

			ul {
				padding-left: 0;
				display: flex;
				gap: 1rem;
				padding: 1rem 0;
				li {
					width: 100%;
				}
			}
		}
	}
}

video {
	width: 100%;
}
.side {
	border-radius: 1rem;
	width: 100%;
}
</style>
