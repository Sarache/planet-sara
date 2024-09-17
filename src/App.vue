<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import { RouterView } from "vue-router";
import { onMounted, onBeforeUnmount, ref } from "vue";

const pageContainer = ref(null);
const pageContent = ref(null);

onMounted(() => {
  const sections = document.querySelectorAll("section");

  // Create the IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the body background color based on the section
          document.body.style.backgroundColor = getComputedStyle(entry.target).backgroundColor;
        }
      });
    },
    {
      threshold: 0.5, // Adjust based on how much of the section needs to be visible
    }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Clean up when the component is unmounted
  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <HeaderMenu />
  <div ref="pageContainer" class="pagecontainer" @mousemove="handleMouseMove">
    <div ref="pageContent" class="pagecontent">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagecontainer {
  overflow: hidden; /* Prevent scrollbars when rotating */
  scroll-snap-type: y mandatory; /* Enable vertical scroll-snapping */
  height: 100vh; /* Full height for each section */
  overflow-y: scroll; /* Enable scrolling */
  scroll-behavior: smooth; /* Smooth scrolling behavior */
}

.pagecontent {
  transition: transform 0.1s ease-out; /* Smooth transition */
}
</style>
