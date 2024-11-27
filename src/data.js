export const portfolioData = {
	axel: {
		title: "Axel - Your insurance companion",
		label: "axel",
		year: "2020",
		company: "Liquid Studios France",
		description:
			"Created and designed a conversational interface with the ability to analyze insurance policies, contracts and deliver a clear and concise output to the user. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.",
		tags: ["Storyboard", "User Interface", "Gen AI", "Insurance", "Immersive Demo"],
		icons: ["Figma", "https://xxx", "Dovetail"],
		classification: "Confidential",
		imageUrl: "./img/Axel_UI.png",
		video: "../vid/Teaser_v2_EN.mp4",
		primarySections: [
			{
				title: "The Client",
				description:
					"The client is a <strong>national insurance company</strong> with different products such as Bank insurance, House Insurance and a service portfolio.",
			},
			{
				title: "The Challenge",
				description:
					"We have identified that the clients of the insurance are <strong>not really aware of their contract terms and specific conditions.</strong> Moreover, in situations of distress, they get really <strong>frustrated getting in touch with a human assistant</strong> to respond quickly to their queries and giving personalized assistance.",
			},
			{
				title: "The Solution",
				description:
					"We have Created and designed a <strong>conversational interface</strong> with the ability to <strong>analyze insurance policies, contracts and deliver a clear and concise output to the user thanks to Generative AI</strong>. It is also capable of defining the most profitable condition when two or more contracts overlap, or even promote internal products based in the context of the conversation.",
			},
		],
		sections: [
			{
				title: "First Value Proposition",
				description:
					"After numerous working sessions and touch points, we elaborated a value proposition canvas to showcase the most relevant features and how can it improve user experience and adoption.",
				image: "../img/Axel_ValueProp.svg",
				altText: "Value Proposition canvas",
			},
			{
				title: "First Wireframes",
				description:
					"We imagined how the experience can be to design a user journey and in which moments of life Axel could provide information and solutions to John. The user needs a very concise answer to a query.",
				image: "../img/Axel_Wireframe.png",
				altText: "",
			},

			{
				title: "First Chat GPT experiments",
				description:
					"Open AI is the to-go Gen AI tool, so we experimented with some questions and sentiment analysis. We will prompt-engineer the instructions and make a framework that can receive all kinds of text documents in order to analyze them and translate them into a more humanistic answer. <br /> We have provided as well a list of services with a label, description, image and link associated to each one, in order to recommend relevant services included or not in the user contract. <br /> Moreover, we have injected all partnerships to include relevant discounts in specific contexts. <br /> Everything has been added into a dev enviroment to test questions and answers.",
				image: "../img/Axel_Dev.png",
				altText: "",
			},

			{
				title: "Designing the storytelling",
				description:
					"To convey our solution and bring up all the advantages, we needed to create a coherent, realistic and relatable story. The story is set in France and Switzerland and we are following John, a freelance architect that loves winter sports and wants to prepare a ski holiday in Switzerland. The story tells 4 key moments in John's trip: the first interactions with Axel for basic insurance questions and early user adoption, the car rental website policies, a terrible accident happening outside of the European territory and after the accident recovery. <br /> Each moment represents a feature or a capability: <ul><br /><li> <strong>Step 1</strong>: It shows the first interactions with Axel after downloading the app and how to use it. John asks questions through speech-to-text and gets reliable and precise answers, he also gets the whole conversation transcript in his mailbox. </li> <br /> <li> <strong>Step 2</strong>: John needs to rent a car, but is unsure of the coverage of its own policy and asks Axel if he needs to get the website insurance, getting a comparison of his own contract and the one provided. After finding Axel very useful, he uploads his other contracts, such as Health and Home insurance. Now Axel can advise in other fields and with other contracts. </li> <br /> <li> <strong>Step 3</strong>: John causes a terrible accident while skiing and has broken someone's ski material. He is injured and has to be taken to the nearest hospital in Switzerland, being a private healthcare system. After providing Axel with this information, John can ask for refund from his public healthcare system and other services thanks to his insurance policy Snow and Mountain, covering every ski accident worldwide. </li> <br /> <li><strong>Step 4</strong>: John is victim of a theft while he was shopping. His car has broken glass and he lost his new pair of ski. Axel provided the nearest repair center and the actionnables to get the stolen objects refunded.</li></ul></body>",
				figma:
					"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhdSf4iVYBgO4kO0bSwSH0C%2FCompanion%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2146-6296%26viewport%3D40%252C390%252C0.04%26t%3Dw8lkfNOrdHFRxqYD-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D2146%253A6296%26show-proto-sidebar%3D1%26mode%3Ddesign",
				altText: "",
			},

			{
				title: "Creating the 'Wow' effect",
				description:
					"As a technology team focused on innovation, we built a 3D enviroment to showcase Axel capabilities. This scene has 3D animations to help the user know what is going on. We built several Axel animatiions, such as looking through the folders and documents, and animated the background when searching. <br /> More than just a web enviroment for our assistant, we have made the scene compatible with presenter immersion and chroma key recording for remote demos.",
				image: "./img/Axel_Metaverse.png",
				altText: "",
			},
		],
	},

	lsfdesignsysystem: {
		title: "Liquid Studios France Design System",
		label: "lsfdesignsysystem",
		year: "2020",
		company: "Liquid Studios France",
		description:
			"Set up of a Figma environment for design tokens, principles and components. As well, we have established a unique branding for events and presentations and a design-to-dev process to create interfaces with low to no code.",
		tags: ["Design Systems", "Design Ops", "Branding", "Design Manifesto", "Component Library"],
		icons: ["Figma", "https://xxx", "Azure DevOps", "Photoshop"],
		classification: "Confidential",
		imageUrl: "./img/LSDS_Splash.png",
		primarySections: [
			{
				title: "The Challenge",
				description:
					"In their CRM, a module called Next Best Action designed by the company is provided for customer support agents in order to speed up the process in different touchpoints. <strong>The component seems to be underused </strong>and we need to know why and which can be the best approach.",
			},
			{
				title: "The Solution",
				description:
					"We have redesigned the NBA module with call-to-action button labels, requirements to trigger the action and a short description.",
			},
		],
		sections: [
			{
				title: "Functionnal deep dive + Technical feasibility assessment → Mock up solution",
				description:
					"First, it is essential to get to understand the tool and what NBA offers to the users. For that, we are planning a research phase with every stakeholder to ensure all profiles need the tool and use it the same way. Once we have the main insights, we can start building the user personae, based on our key users.",
				image: "../img/BWTSR_Research1.png",

				altText: "Research roadmap & activities",
			},
			{
				image: "../img/BWTSR_Research2.png",
			},
			{
				description: 
				"Once we know the main streams to work in thanks to the valuable user insights, a technical feasibility assessment needs to be made from the client team to define the approach.",
				image: "../img/BWTSR_Persona.png",
			},

			{
				image: "../img/BWTSR_Insights1.png",
			},

			{
				title: "Mock-up design",
				description:
					"To bring the design solution to the client, we have iterated twice on the module. Here are the 3 versions:",
				image: "../img/BWTSR_Design1.png",
			},
			{
				image: "../img/BWTSR_Design2.png",
			},
			{
				image: "../img/BWTSR_Design3.png",
			},
		],
	},

	bestrecommendation: {
		title: "Best Recommendation - Salesforce",
		label: "bestrecommendation",
		year: "2020",
		company: "Liquid Studios France",
		description:
			"We have been asked to leverage one of Salesforce features: Next Best Action. Based in quantitative and qualitative research and diverse checkpoints with product advocates, we came up with a simple, effective, intuituve and consistent design thanks to the client library and design system.",
		tags: ["User Research", "Service Design", "User Interface", "Augmented Agent"],
		icons: ["Figma", "Dovetail"],
		classification: "Confidential",
		imageUrl: "./img/BWTSR_Thumbnail.png",
		primarySections: [
			{
				title: "The Client",
				description:
					"The client is a <strong>massive electronic company</strong> operating worldwide and providing electric solutions for particulars, distribution stores and other businesses.",
			},
			{
				title: "The Challenge",
				description:
					"In their CRM, a module called Next Best Action designed by the company is provided for customer support agents in order to speed up the process in different touchpoints. <strong>The component seems to be underused </strong>and we need to know why and which can be the best approach.",
			},
			{
				title: "The Solution",
				description:
					"We have redesigned the NBA module with call-to-action button labels, requirements to trigger the action and a short description.",
			},
		],
		sections: [
			{
				title: "Functionnal deep dive + Technical feasibility assessment → Mock up solution",
				description:
					"First, it is essential to get to understand the tool and what NBA offers to the users. For that, we are planning a research phase with every stakeholder to ensure all profiles need the tool and use it the same way. Once we have the main insights, we can start building the user personae, based on our key users.",
				image: "../img/BWTSR_Research1.png",

				altText: "Research roadmap & activities",
			},
			{
				image: "../img/BWTSR_Research2.png",
			},
			{
				description: 
				"Once we know the main streams to work in thanks to the valuable user insights, a technical feasibility assessment needs to be made from the client team to define the approach.",
				image: "../img/BWTSR_Persona.png",
			},

			{
				image: "../img/BWTSR_Insights1.png",
			},

			{
				title: "Mock-up design",
				description:
					"To bring the design solution to the client, we have iterated twice on the module. Here are the 3 versions:",
				image: "../img/BWTSR_Design1.png",
			},
			{
				image: "../img/BWTSR_Design2.png",
			},
			{
				image: "../img/BWTSR_Design3.png",
			},
		],
	},

	salesjourney: {
		title: "Sales Journey Mapping",
		label: "salesjourney",
		year: "2020",
		company: "Liquid Studios France",
		description:
			"We have conducted over 40+ interviews in different languages for sales representatives in USA, Spain, Netherlands, Brazil and UK hubs to align experiences and identify pain points throughout every process. ",
		tags: ["User Research", "Contextual Enquiring", "Shadowing", "Field study", "User Personae", "Service Blueprint"],
		icons: ["Miro", "Dovetail"],
		classification: "Confidential",
		imageUrl: "../img/BP_Contractors.jpg",
	},

	ePOD: {
		title: "PolarPOD digital Twin",
		label: "ePOD",
		year: "2020",
		company: "Liquid Studios France",
		description:
			"Design and creation of a static website to raise awareness regarding the south sea exploration thanks to a multimedia blogging format and a Digital Twin 3D model of a neutral-carbon footprint vertical boat.",
		tags: ["3D Design", "Green IT", "Sustainable", "Sciences & Environment", "Responsive Design", "UI", "Accessibility"],
		icons: ["Miro", "Dovetail"],
		classification: "Confidential",
		imageUrl: "../img/ePod_Parcours.png",
		video: "../vid/ePod_Video.mp4",

		primarySections: [
			{
				title: "The Client",
				description:
					"Jean-Louis Etienne, a well-known french doctor and explorer, started a project involving a <strong>vertical boat and an expedition in the South Pole</strong> taking place in 2024. The team wanted a website that could provide open-source data that can be understood by students and non-scientists.",
			},
			{
				title: "The Challenge",
				description:
					"An interactive Digital Twin able to explain the expedition to the big audience through a 3D model and story paths and broadcast live data retrieved by the scientists in the real boat.",
			},
			{
				title: "The Solution",
				description:
					"The challenge was to include a sustainable solution along with a digital twin and reach the big audience, designing with strong accessibility and usability standards. As well, they wanted the desktop version first, which slowed down the mobile design phase.",
			},
		],
		sections: [
			{
				title: "Research phase",
				description:
					"The main key findings were that having a 3D model of the expedition boat would be interesting for audience segment. In addition, we needed a solution that could be shown in classrooms and easily shared, so the information flows and reaches as many people as possible. As the Polar POD itself, the website needs to be sustainable and low on resources.",
				image: "../img/ePOD_UserFlow.png",
				altText: "ePOD desired user flow",
			},
			{
				title: "Design phase",
				description:
					"First things first, we decided to use a third-system approach. In desktop, 2/3 represent the 3D model, and 1/3 will be the media content on its right side. As well, we discussed the navigation system and it was initially decided that there would be 2 modes, mouse and keyboard, but according to accessibility standards, these rules might be limitative if the user wants to use both systems at the same time.",
				image: "../img/ePOD_Desktop_v0.png",
				altText: "",
			},

			{
				description:
					"We started an atomic approach by designing the pieces of media to then arrange them together. The audio module was designed according to a default web3 audio player standard, but adding a transcript dropdown section to improve accessibility.",
				image: "../img/ePOD_AudioComponent.png",
				altText: "",
			},

			{
				title: "",
				description:
					"The process was clear each time: <br>The designer gets a ticket of a module or functionnality → the designer creates one or multiple solutions → every week, technical teammates challenge the feasability or each one’s preference while the designer explains and defends their design (thanks to the amazing ritual 3 amigos) → PO creates ticket with chosen solution for the developer <br> We continued validating modules and bringing solutions to develop:",
				image: "../img/ePOD_Video_component.png",
				altText: "",
			},

			{
				title: "",
				description:
					"To make a lightweight website, we needed to host the heavy media somewhere out, so we decided to use Sketchfab for the 3D model and Youtube for the videos. We also uploaded small images to not overload the server.",
				image: "",
				altText: "",
			},

			{
				title: "First desktop version",
				description: "We launched the first version under the URL <strong>epod.polarpod.fr</strong>",
				image: "../img/ePOD_Desktop_v1.png",
				altText: "",
			},

			{
				title: "",
				description:
					"A session of usability testing has been scheduled in order to detect bugs and desktop usability to anticipate for the mobile version and next desktop iteration, as well as a quick survey to get additional and quantitative insights. Overally, users navigate fluidly and understand the navigation principles of the epod website. <br> <ul><li>However, sometimes users get lost moving the 3D model too much and cannot go back to a default point of view.</li><li>Although, some users find the description and transcriptions repetitive, the text remains the same. They also would want some formatting and spacing.</li><li>Some sections lack interactivity, users would like a highlighted section of the 3D model when reading about it.</li><li>Also, as a general feedback, users didn’t find the information about the boat, like how can it float, or what is the expedition roadmap. They didn’t know there is a Polar POD standalone website, which can be confusing.</li></ul>",
				image: "../img/ePOD_Desktop_v1.png",
				altText: "",
			},

			{
				title: "Responsiveness",
				description:
					"One of the main challenges in this project is responsiveness. I personally always push for a mobile-first approach as a matter of simplicity and prioritization, but the desktop-first decision was already made when I entered the team. <br>In order to keep most of the space for the 3D model, we arranged the the breakpoint change in 1000px, having the desktop viewport in landscape-oriented tablets and mobile in vertical tablets. On the left, 1000px width (desktop), on the right 999px (mobile)",
				image: "../img/ePOD_Responsive.png",
				altText: "",
			},

			{
				title: "",
				description: "Then, we tried to conceive the mobile version:",
				image: "../img/ePOD_Mobile.png",
				altText: "",
			},

			{
				title: "",
				description:
					"As said before, this was challenging because there was too much text provided by the editorial team. The introduction text in the modal window, for instance, felt longer in smaller mobile screens, so the user needs to scroll to finish reading or moving on.<br>Also, repositioning elements to the mobile interface without compromising the design and structure was one of the hardest challenges of the project:",
				image: "../img/ePOD_Responsive_Multipath.png",
				altText: "",
			},

			{
				title: "",
				description:
					"For the path selection, we would lose all the 3D model underneath the content, which can be uncomfortable for the user that wants to explore the Digital Twin. <br>We ideated this accordion style for the paths so it can show the title of the capsule while navigating around the 3D model. We suggested to add a handlebar on top of the accordion, but unfortunately after some tests, it lacked affordance. <br>We decided to include a floating button (inspired in Google maps) with a “Read more” label.",
				image: "../img/ePOD_Mobile_accordion.png",
				altText: "",
			},

			{
				title: "Conclusion",
				description:
					"The ePOD is a Digital Twin for the Polar POD, a vertical boat built to resist the violent water flows of the south pole that can be explored before its construction thanks to the Accenture/Octo Team working on it. <br>The website is being used in schools, alongside with the <a href='https://www.airbus.com/en/newsroom/stories/2023-05-polar-pod-hits-the-road-discover-the-polarpodibus'>PolarPODibus</a> to illustrate the expedition and its implications.<br>As well, we have structured the code in order to synchronize the real PolarPOD data to make a live digital logbook and follow up on the scientists inputs and discoveries. This open sourced data can be retrieved by scientific communities and average users. <br>We empower companies and associations to be independent and autonomous with our delivered product, so the next iterations will be owned by the client, always accompanied with our recommendations.",
				image: "",
				altText: "",
			},
		],
	},

	ISODT: {
		title: "In service Ops - Digital Twin",
		label: "ISODT",
		year: "2020",
		company: "Liquid Studio France",
		description:
			"A dynamic dashboard for airforce maintenance. It is developed under different roles & permissions, and projects live data into the dashboard, only showing relevant items to every user type",
		tags: ["UI Design", "Dashboard", "Bento Design", "Data-driven", "Digital Twin", "Smart Data"],
		icons: ["Miro", "Dovetail"],
		classification: "Confidential",
		imageUrl: "./img/ISODT_tablet_mockup.png",
	},

	Lsinthewoods: {
		title: "LS In the Woods",
		label: "Lsinthewoods",
		year: "2020",
		company: "Nicecactus",
		description:
			"Preparation and facilitation of a team design thinking workshop to inspire young talents and think together new paradigms for the 2023 fiscal year. Session starts with an ice breaker (sending a GIF to express feelings about last year), then a disruptive thinking exercise for creating new convergences between technologies and industries.",
		tags: ["Ideation", "Facilitation", "Design Thinking", "Workshop", "Technology", "Problem-solving", "Disruptive thinking"],
		icons: ["Figma", "Power Point", "Menti"],
		classification: "Confidential",
		imageUrl: "./img/LSWoods_Title.png",
	},

	jochatbot: {
		title: "Jo - The customer support chatbot",
		label: "jochatbot",
		year: "2020",
		company: "Liquid Studio France",
		description:
			"Thanks to NLP and multi-API fetching, Jo has been one of the most impactful projects we have been doing for our partner. The agent is able to look for a product or its replacement, fetch the price and availability, track orders, and switch between requests thanks to our intent and cross intent approach.",
		tags: ["User Research", "Problem-solving", "Service Blueprint", "Conversational Flows", "Augmented Support Channel"],
		icons: ["Miro", "Dovetail"],
		classification: "Confidential",
		imageUrl: "./img/Chatbot_Thumbnail.png",
	},

	nicecactusds: {
		title: "Nicecactus.gg Design System - Blue Agave",
		label: "nicecactusds",
		year: "2020",
		company: "Nicecactus",
		description:
			"Contribution to nicecactus’ design system, especially with card components and modules. A versatile yet recognizable design system based in Frost’s atomic principles to cover all nicecactus’ areas and provide solutions for scaling-up.",
		tags: ["Design Systems", "Atomic Design", "Tokens", "Components", "Design Ops"],
		icons: ["Figma", "Atlassian"],
		classification: "Confidential",
		imageUrl: "./img/Nicecactus_DS_Thumbnail.png",

		primarySections: [
			{
				title: "The Client",
				description:
					"Nicecactus is a **all-in-one gaming platform**, containing multiple products under its name: tournament, training and analytics. Nicecactus is also the result from merging different start-ups: Glory for Gamers and Skillink.",
			},
			{
				title: "The Challenge",
				description:
					"Nicecactus has different services that are unrelated visually (tournament pages, training pages, analytics dashboard) and need to be consistent and identifiable. Moreover, it contains different technology or framework based on the acquired start-up companies.",
			},
			{
				title: "The Solution",
				description:
					"A <strong>versatile yet recognizable design system</strong> based in Frost’s atomic principles to cover all nicecactus’ areas and provide solutions for scaling-up.",
			},
		],
		sections: [
			{
				title: "Research phase",
				description:
					"Our users were mostly youngsters wanting to compete in nicecactus’ tournaments but also curious about experiencing the other products our platform offers.<br>Since nicecactus acquired different services to make this all-in-one platform, we needed to establish a design pipeline in order to deliver fast, consistently and meaningfully.<br>Moreover, we were working with junior developers that were not used to implement a design system, so defining every step and making sure the latest version is taken into account would improve the process.",
			},
			{
				title: "Design phase",
				description:
					"As discussed, we needed to find a common visual pattern and look and feel to keep consistency and be identifiable.<br>Using the <a href='https://www.designsystemchecklist.com/'>design System checklist</a> to organize our elements, we established consistent breakpoints, accent colors, design tokens and values to then tackle the visual creation part. <br>We worked mainly on core components since we needed to redesign content pages that were not part of nicecactus. Every service, as mentionned above, is defined by a color: orange for tournaments, green for training, and blue for analytics. This way, the user can identify the section  just by looking at the accent color of the page.",
				image: "../img/Nicecactus_DS_Colors.png",
				altText: "",
			},

			{
				description:
					"There was also a notification (re)design pending, since neither the visual appearance or the tone of voice were consistent across all services. Based on several articles, we made the alerts with a friendly, non-intrusive approach to the user, appearing as a toast.",
				image: "../img/Nicecactus_DesignSystem_Banners.png",
				altText: "",
			},

			{
				title: "New approaches",
				description:
					"The design system was richer and richer in components, which made it more difficult for developers to be on time, so part of the team started a component library in react so the components can be directly retrieved once coded. The user is cactus and password thenicest.",
			},

			{
				description:
					"Before that, components would be constantly updated since the needs would partially change due to Product team decisions that would modify the roadmap and priorities last minute. We clearly needed to change our approach if these modifications would happen every once in a while.",
				image: "../img/Nicecactus_DS_Thumbnail.vue",
			},

			{
				description:
					"We then decided to make Figma files for developers so we can control the versions of the components and updates may be done in future iterations. We deliver the Figma file to the dev team with the used components, using one page per Jira ticket.",
			},

			{
				description:
					"The workflow figma to dev looked like this: <br> Product owner creates a design ticket → design team makes sure **every component is designed** → design teammate makes the Figma file for devs or adds the ticket page to it → Product owner creates dev ticket → developer codes page → page is reviewed by design teammate<br><br>Product owner creates a design ticket → design team notices a component is needed → design teammate creates the component → design team reviews component → design teammate makes the Figma file for devs or adds the ticket page to it → Product owner creates dev ticket → developer codes page → page is reviewed by design teammate",
			},

			{
				description:
					"We redesigned thre profile page as well in order to gamify the experience across nicecactus with visual rewards, such as avatars and roles.",
			},

			{
				title: "Testing & evaluating",
				description:
					"We released the new wave of components and transformed a frankestein website into a consistent, unified and identifiable visual approach.<br>For that, we used tools such as Hotjar, Lookback for usability testing, and implemented A/B testing in nicecactus’ landing page.<br>The key takeaways to our testing phase were that users would rather go to the service page (tournaments, training, analytics) rather than looking for the game dashboard, which made us conclude that we needed to rework several homepages in order to show personalized content and promote new related elements at the same time.",
				image: "",
				altText: "",
			},

			{
				title: "Conclusion",
				description:
					"Nicecactus was a giant website that offered dozens of games to compete thanks to our technology and needed a new, fresh and consistent look. Although all different products are distinguishable, we find much more consistency and an open window to scale-up effortlessly.",
				image: "",
				altText: "",
			},
		],
	},

	nicecactuscorner: {
		title: "B2B Tournament Service for Nicecactus.gg",
		label: "nicecactuscorner",
		year: "2020",
		company: "Nicecactus",
		description:
			"Optimization of landing page delivery process and design for nicecactus' brand partners such as McDonalds, Danone, Nike. Brands are able to organize tournaments thanks to nicecactus’ technology and promote eSports in their communities.",
		tags: ["Component Library", "Customizable design", "Effective delivery", "Design Ops"],
		icons: ["Miro", "Dovetail"],
		classification: "Confidential",
		imageUrl: "./img/Nicecactus_B2B_Thumbnail.png",
	},

	nicecactusTNT: {
		title: "Nicecactus - Tournament Flow",
		label: "nicecactusTNT",
		year: "2020",
		company: "Nicecactus",
		description:
			"We have merged G4G's technology into our framework and adapted every aspect of the process into an intuituve, consistent and visually appealing dynamic page. However, this was a challenge if we look at the diversity of the games catalog nicecactus had, and how we can present in a standarized way all the tournament modes for every title.",
		tags: ["Usability Testing", "Heatmap", "Behavioral Design", "Evaluative Design", "Technology", "Dynamic design"],
		icons: ["Figma", "Lookback", "Hotjar"],
		classification: "Confidential",
		imageUrl: "./img/Nicecactus_TNT_Thumbnail.png",
	},

	sentarte: {
		title: "SentArte - The interactive chair game",
		label: "sentarte",
		year: "2020",
		company: "Museo Nacional de Artes Decorativas",
		description:
			"This museum has been highly unnoticed among the Madrid visitors, so our team decided to participate in a proposal to keep the museum alive while reforming the majestic building where all the pieces of art belong. The solution is based on a scouting urban game, engaging with Augmented Reality and history inmersion thanks to the app called SentArte.",
		tags: [
			"Field Research",
			"Augmented Reality",
			"Gamification",
			"Physical Product Design",
			"Mobile App",
			"QR Code",
			"Madrid",
			"Portal to the past",
		],
		icons: ["Figma", "SparkAR", "AutoCAD"],
		classification: "Public",
		imageUrl: "./img/Sentarte_.png",
	},
}
