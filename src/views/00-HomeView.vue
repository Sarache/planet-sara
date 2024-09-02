<script setup>
import hero from "@/components/hero.vue";
import InfiniteSlider from "@/components/InfiniteSlider.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "✧ 𝓟𝓵𝓪𝓷𝓮𝓽 𝓢𝓪𝓻𝓪 ✧ Welcome abroad!",
});
</script>

<template>
  <main>
    <hero />
    <br />
    <!-- <InfiniteSlider /> -->
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/grid.scss";


main {
  display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    min-height: 100vh; /* Ensure the main container takes full viewport height */
    padding: 4rem; /* Optional: adjust padding as needed */
  @media (max-width: 1000px) {
    flex-direction: column;
  }
}
</style>
