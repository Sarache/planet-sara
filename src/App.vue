<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const pageContainer = ref(null);

const handleScroll = () => {
  const sections = document.querySelectorAll('.scroll-section');

  if (sections.length === 0) {
    console.error('No sections found for smooth scrolling.');
    return;
  }

  let currentSectionIndex = 0;

  window.addEventListener('wheel', (event) => {
    // Prevent default scroll behavior
    event.preventDefault();

    if (event.deltaY > 0) {
      // Scroll down
      currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
      // Scroll up
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    // Scroll to the target section
    sections[currentSectionIndex].scrollIntoView({
      behavior: 'smooth'
    });
  });
};

onMounted(() => {
  handleScroll();
});
</script>

<template>
  <HeaderMenu />
  <div ref="pageContainer" class="page-container">
    <RouterView />
  </div>
</template>

<style scoped>
.page-container {
  height: 100vh; /* Full screen height */
  overflow: hidden; /* Disable default scrolling */
  display: flex;
  flex-direction: column;
}
</style>
