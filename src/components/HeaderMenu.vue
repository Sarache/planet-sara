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
			<router-link to="/designportfolio">Design Portfolio</router-link>
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
		return this.$route.path.startsWith("/about");
	  },
	},
  };
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
  width: 100%; // Full width to ensure it's centered
  max-width: 500px; // Adjust this to your desired maximum width

  @media (max-width: 1000px) {
    gap: 0.5rem;
  }
}

.menuheader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; // Space out items evenly
  gap: 1rem;
  padding: .5rem 1rem; // Remove default padding for menu
  color: $plum-dark;

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
  